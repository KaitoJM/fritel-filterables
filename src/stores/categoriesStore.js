import { defineStore } from "pinia";
import { ref } from "vue";
import categoriesJson from "../data/categories.json";

export const useCategoriesStore = defineStore("categories", () => {
  const categories = ref(categoriesJson);

  const setCategories = (items) => {
    categories.value = items;
  };

  return { categories, setCategories };
});
