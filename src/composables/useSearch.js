import { ref } from "vue";

/** @type {import('vue').Ref<string>} */
const searchString = ref("");

export function useSearch() {
  return {
    searchString,
  };
}
