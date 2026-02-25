<script setup>
import Filters from "./components/Recipes/Filters.vue";
import { useSelectedFilters } from "./composables/useSelectedFilters";
import SelectedFilters from "./components/Recipes/SelectedFilters.vue";
import ProductGrid from "./components/Recipes/ProductGrid.vue";
import Search from "./components/Recipes/Search.vue";

const { selectedFilters } = useSelectedFilters();
</script>

<template>
  <div class="fritel-filterables-app--container">
    <div class="h-max fritel-filterables-app--left">
      <Search />
      <Filters />
    </div>
    <div class="w-full">
      <ProductGrid />
    </div>
  </div>
</template>

<style lang="scss">
.fritel-filterables-app {
  &--container {
    @apply flex gap-16 p-6;
  }

  &--left {
    @apply flex flex-col gap-4;
  }
}
</style>
