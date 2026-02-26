<script setup>
import { onMounted, ref } from "vue";
import authors from "../../data/authors.json";
import UTDService from "../../services/UTDService";
import FilterGroup from "./FilterGroup.vue";
import { useCategoriesStore } from "../../stores/categoriesStore";

const categoriesStore = useCategoriesStore();

const isLoading = ref(true);
const filterCategories = ref({
  id: "categories",
  name: "Categories",
  multi: true,
  items: categoriesStore.categories,
});
const filterAuthors = ref({
  id: "authors",
  name: "Authors",
  multi: true,
  items: authors,
});
const emit = defineEmits(["select"]);

const getFilters = async () => {
  isLoading.value = true;
  const res = await UTDService.getFilters();
  categoriesStore.setCategories(res.categories);
  filterCategories.value = {
    id: "categories",
    name: "Categories",
    multi: true,
    items: res.categories,
  };
  filterAuthors.value = {
    id: "authors",
    name: "Authors",
    multi: true,
    items: res.authors,
  };
  isLoading.value = false;
};

onMounted(() => {
  // getFilters();
});
</script>

<template>
  <div class="filter-container">
    <h3>Filters</h3>
    <ul class="filter-group-container">
      <FilterGroup
        :name="filterCategories.name"
        :items="filterCategories.items"
        default-expand
      />
    </ul>
    <br />
    <ul class="filter-group-container">
      <FilterGroup
        :name="filterAuthors.name"
        :items="filterAuthors.items"
        default-expand
      />
    </ul>
  </div>
</template>

<style scoped>
h3 {
  @apply mb-4 text-[20px];
}

.filter-container {
  @apply p-4 w-full;

  background-color: #efefef80;
  border-radius: 12px;
}
.filter-group-container {
  @apply w-full md:w-[300px];
}
</style>
