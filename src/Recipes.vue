<script setup>
import Filters from "./components/Recipes/Filters.vue";
import { useSelectedFilters } from "./composables/useSelectedFilters";
import SelectedFilters from "./components/Recipes/SelectedFilters.vue";
import ProductGrid from "./components/Recipes/ProductGrid.vue";
import Search from "./components/Recipes/Search.vue";
import Drawer from "./components/ui/Drawer.vue";
import DrawerTrigger from "./components/ui/DrawerTrigger.vue";

const { selectedFilters } = useSelectedFilters();
</script>

<template>
  <div class="fritel-filterables-app--container">
    <div class="h-max fritel-filterables-app--left">
      <div class="filter-trigger-container">
        <DrawerTrigger class="filter-trigger">
          <!-- Font Awesome fa-solid fa-filter -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
            class="w-4 h-4"
          >
            <path
              d="M0 73.7C0 50.67 18.67 32 41.7 32H470.3C493.3 32 512 50.67 512 73.7c0 9.741-3.293 19.21-9.29 26.86l-164.7 210.2v218.2c0 17.02-13.36 31-30.29 31c-6.217 0-12.28-1.934-17.41-5.548L188.8 484.8c-9.741-6.633-15.64-17.63-15.64-29.45V310.7L9.29 100.6C3.292 92.95 0 83.49 0 73.7z"
            />
          </svg>
          Filter
        </DrawerTrigger>
      </div>
      <Drawer>
        <Search />
        <Filters />
      </Drawer>
    </div>
    <div class="w-full">
      <ProductGrid />
    </div>
  </div>
</template>

<style lang="scss">
.fritel-filterables-app {
  &--container {
    @apply flex flex-col md:flex-row gap-8 md:gap-16 p-6;
  }

  &--left {
    @apply flex flex-col gap-4;
  }
}

.filter-trigger-container {
  @apply flex justify-end;

  .filter-trigger {
    @apply bg-primary text-white py-2 px-6 text-[1.5rem] font-semibold flex md:hidden gap-4 items-center;
  }
}
</style>
