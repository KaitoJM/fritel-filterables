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
import { buildRecipePreviewHtml } from "../../utils/buildRecipePreviewHtml";

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
    let processedHtml = recipe
      ? parseRecipeTemplate(pageHTML, recipe)
      : pageHTML;

    previewHtml.value = buildRecipePreviewHtml(
      processedHtml,
      UTDService.siteId,
    );
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
