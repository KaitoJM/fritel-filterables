import { defineStore } from "pinia";
import { ref } from "vue";
import authorsJson from "../data/authors.json";

export const useAuthorStore = defineStore("authors", () => {
  const authors = ref(authorsJson);

  const setAuthors = (items) => {
    categories.value = items;
  };

  return { authors, setAuthors };
});
