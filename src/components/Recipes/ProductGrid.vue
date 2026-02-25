<script setup>
import { computed, onMounted, ref, useTemplateRef, watch } from "vue";
import UTDService from "../../services/UTDService";
import { useSelectedFilters } from "../../composables/useSelectedFilters";
import { useSearch } from "../../composables/useSearch";
import siteUrl from "../../constants/siteUrl";
import messages from "../../constants/messages";
import SelectedFilters from "./SelectedFilters.vue";

const { selectedFilters } = useSelectedFilters();
const { searchString } = useSearch();
const isLoading = ref(true);
const expandMobileFilter = ref(false);
const products = ref([]);
const statusClasses = {
  sold: "bg-red-700",
  reserved: "bg-primary",
  available: "bg-green-700",
};

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

const filteredProducts = computed(filterRecipes);

watch(searchString, filterRecipes);

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
    <div v-if="isLoading">Loading receipes...</div>
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
            <li
              v-for="product in filteredProducts"
              :key="product.id"
              class="fritel-filterables-grid--item"
            >
              <a :href="siteUrl + product.bloggerPageUrl">
                <div class="fritel-filterables-grid--image-container">
                  <img :src="product.metadata.image" />
                </div>
                <div class="fritel-filterables-grid--details">
                  <p>{{ product?.locationPageMeta?.author }}</p>
                  <div class="fritel-filterables-grid--item-titlebar">
                    <h3 class="fritel-filterables-grid--title">
                      {{ product.name }}
                    </h3>
                  </div>
                </div>
              </a>
            </li>
          </TransitionGroup>
        </div>
      </div>
    </Transition>
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

  &--list {
    @apply grid gap-6;

    &.mobile-expand {
      @apply grid-cols-1 sm:grid-cols-2;
    }

    &.mobile-closed {
      @apply grid-cols-1 sm:grid-cols-2 md:grid-cols-3;
    }
  }

  &--item {
    @apply bg-[#f5f5f7] rounded-lg overflow-clip;
  }

  &--image-container {
    @apply h-60 overflow-clip md:h-80;

    img {
      @apply object-cover h-80 hover:scale-110 w-full transition-transform duration-700;
    }
  }

  &--title {
    @apply text-[#1a1a1a];
  }

  &--price {
    @apply text-primary;
  }

  &--details {
    @apply p-3 flex flex-col gap-2;
  }

  &--status {
    @apply rounded p-1 text-sm w-max;
  }
}
</style>
