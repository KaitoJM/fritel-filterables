<script setup>
import { computed, onMounted, ref, watch } from "vue";
import UTDService from "../../services/UTDService";
import { useSelectedFilters } from "../../composables/useSelectedFilters";
import { useSearch } from "../../composables/useSearch";
import siteUrl from "../../constants/siteUrl";
import messages from "../../constants/messages";
import SelectedFilters from "./SelectedFilters.vue";
import Pagination from "./Pagination.vue";
import Item from "./Item.vue";
import ItemLoader from "./ItemLoader.vue";
import Dialog from "../ui/Dialog.vue";
import { parseRecipeTemplate } from "../../utils/parseRecipeTemplate";

const { selectedFilters } = useSelectedFilters();
const { searchString } = useSearch();
const isLoading = ref(true);
const expandMobileFilter = ref(false);
const products = ref([]);

const filterRecipes = () => {
  let searchProducts = products.value;

  if (searchString.value.length) {
    searchProducts = searchProducts.filter((p) =>
      p.name.toLowerCase().includes(searchString.value.toLowerCase()),
    );
  }

  if (!selectedFilters.value.length) {
    return searchProducts;
  }

  return searchProducts.filter((product) => {
    const lowercaseCategories = product.metadata.categories.map((cat) =>
      cat.toLowerCase(),
    );

    const lowerCaseSelections = selectedFilters.value.map((val) =>
      val.toLowerCase().replace("&", "and"),
    );

    return lowerCaseSelections.some((category) => {
      return lowercaseCategories.includes(category);
    });
  });
};

const getRecipes = async () => {
  isLoading.value = true;
  const res = await UTDService.getRecipes();
  products.value = res;
  isLoading.value = false;
};

const PAGE_SIZE = 12;
const currentPage = ref(1);

const filteredProducts = computed(filterRecipes);
const totalPages = computed(() =>
  Math.ceil(filteredProducts.value.length / PAGE_SIZE),
);
const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * PAGE_SIZE;
  return filteredProducts.value.slice(start, start + PAGE_SIZE);
});

watch(filteredProducts, () => {
  currentPage.value = 1;
});

const dialogRef = ref(null);
const previewHtml = ref("");
const previewLoading = ref(false);

const handlePreview = async (pageId) => {
  previewHtml.value = "";
  previewLoading.value = true;
  dialogRef.value?.open();

  try {
    const recipe = products.value.find((p) => p.pageId === pageId);
    const pageHTML = await UTDService.openRecipePreview(pageId);
    const processedHtml = recipe
      ? parseRecipeTemplate(pageHTML, recipe)
      : pageHTML;

    previewHtml.value = `
        <link href='https://fonts.googleapis.com/css?family=Montserrat:400,400i,600,600i' id='selected-fonts' rel='stylesheet' type='text/css'/>
        <link href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css' rel='stylesheet' type='text/css'/>
        <link href='https://uptodatewebdesign.s3.eu-west-3.amazonaws.com/cdn/dist/v2/app.min.css' rel='stylesheet' type='text/css'/>
        <style id='style-theme-override'>body{font-weight:400;}h1{font-family:'Montserrat',serif;font-weight:null;font-size:36px;color:#000000;}h2{font-family:'Montserrat',serif;font-weight:null;font-size:30px;color:#000;}h3{font-family:'Montserrat',serif;font-weight:null;font-size:24px;color:#000000;}h4{font-family:'Montserrat',serif;font-weight:null;font-size:18px;color:#000000;}h5{font-family:'Montserrat',serif;font-weight:null;font-size:16px;color:#000000;}h6{font-family:'Montserrat',serif;font-weight:null;font-size:14px;color:#000000;}#primary-menu{background-color:#0a3209;}#sub-footer{background-color:#0a3209;}:root{--body-font-family:'Montserrat',serif;--body-font-color:#666666;--body-font-size:16px;--body-link:#e31c18;--body-link-hover:#354046;--body-line-height:1.6em;--menu-font-size:16px;--menu-icon-color:inherit;--menu-font-family:Montserrat;--menu-color:#000000;--menu-hover-link:inherit;--menu-hover-card:inherit;--menu-text-transform:normal;--footer-font-family:'Montserrat',serif;--footer-color:#FFFFFF;--footer-icon:#0a3209;--footer-font-size:16px;--footer-link:#0a3209;--footer-link-hover:#354046;--footer-line-height:1.5em;--page-title-color:#000000 --page-title-font-size:16px;--page-title-font-family:Montserrat;--page-title-line-height:1.5;--page-title-link:#0a3209;--page-title-hover:v#354046;--sub-footer-font-family:'Montserrat',serif;--sub-footer-color:#000000;--sub-footer-icon:inherit;--sub-footer-font-size:16px;--sub-footer-link:inherit;--sub-footer-link-hover:inherit;--sub-footer-line-height:1.5em;--topbar-font-size:53px;--topbar-icon-color:#0a3209;--topbar-font-family:Montserrat;--topbar-color:#000000;--container-max-width:1200px;--theme:#e31c18;--block-padding:6rem;--theme-hover:#354046;</style>
        <style>
        :root {
            --theme: #e31c18;
            --block-padding: 6rem;
            --theme-hover: #354046;
        }
        body {
            margin: 0;
        }
        </style>${processedHtml}
        <script>
        var utdElementSiteUrl = '${UTDService.siteId}';
        var BLOGGER_URL = '/';
        <\/script>
        <script src='https://unpkg.com/swiper@6.1.2/swiper-bundle.min.js'><\/script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js'><\/script>
        <script src='https://uptodatewebdesign.s3.eu-west-3.amazonaws.com/cdn/dist/v2/app.min.multi-platform.js'><\/script>
    `;
  } catch (error) {
    dialogRef.value?.close();
  } finally {
    previewLoading.value = false;
  }
};

onMounted(() => {
  getRecipes();
});
</script>

<template>
  <div ref="fritelFilterablesProductGridRef" class="fritel-filterables-grid">
    <SelectedFilters
      :class="{
        'fritel-filterables-grid--filter-breadcrumbs': selectedFilters.length,
      }"
    />
    <ItemLoader v-if="isLoading" />
    <Transition v-else name="fade" class="w-full">
      <div>
        <p
          class="fritel-filterables-grid--message"
          v-if="selectedFilters.length && !filteredProducts.length"
        >
          <i>{{ messages.no_match.en }}</i>
        </p>
        <div class="w-full" v-if="!isLoading">
          <TransitionGroup
            name="list"
            tag="ul"
            class="fritel-filterables-grid--list"
            :class="expandMobileFilter ? 'mobile-expand' : 'mobile-closed'"
          >
            <Item
              v-for="product in paginatedProducts"
              :key="product.id"
              :name="product.name"
              :author="product?.locationPageMeta?.author"
              :image="product.metadata.image"
              :pageId="product.pageId"
              :tags="product.metadata.categories"
              @preview="handlePreview"
            />
          </TransitionGroup>
          <Pagination
            v-model:currentPage="currentPage"
            :totalPages="totalPages"
          />
        </div>
      </div>
    </Transition>

    <Dialog ref="dialogRef" :loading="previewLoading">
      <iframe
        class="fritel-filterables-grid--preview-iframe"
        :srcdoc="previewHtml"
        sandbox="allow-scripts allow-same-origin"
      />
    </Dialog>
  </div>
</template>

<style lang="scss">
.fritel-filterables-grid {
  &--filter-breadcrumbs {
    @apply mb-3;
  }

  &--message {
    @apply text-center py-7 w-full;
  }

  &--preview-iframe {
    @apply w-full h-full border-0 rounded-xl;
  }

  &--list {
    @apply grid gap-6;

    &.mobile-expand {
      @apply grid-cols-1 sm:grid-cols-2;
    }

    &.mobile-closed {
      @apply grid-cols-1 sm:grid-cols-2 md:grid-cols-3;
    }
  }
}
</style>
