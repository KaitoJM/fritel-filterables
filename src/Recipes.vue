<script setup>
import Filters from "./components/Recipes/Filters.vue";
import { useSelectedFilters } from "./composables/useSelectedFilters";
import SelectedFilters from "./components/Recipes/SelectedFilters.vue";
import ProductGrid from "./components/Recipes/ProductGrid.vue";

const { selectedFilters } = useSelectedFilters();
</script>

<template>
  <div class="fritel-filterables-app--container">
    <div class="h-max">
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
    @apply flex gap-4 p-6;
  }
}
</style>
