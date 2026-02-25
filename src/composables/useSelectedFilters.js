import { ref } from "vue";

/** @type {import('vue').Ref<string[]>} */
const selectedFilters = ref([]);

export function useSelectedFilters() {
  const scrollToProductGrid = () => {
    const appContainer = document.querySelector(
      "#fritel-filterables-products-module"
    );

    const productGrid = document.querySelector(".fritel-filterables-grid");

    window.scrollTo({
      top: productGrid.offsetTop + appContainer.offsetTop - 20,
      behavior: "smooth",
    });
  };

  /**
   * @param {string} e
   */
  const setSelectedItems = (e) => {
    if (selectedFilters.value.includes(e)) {
      const idx = selectedFilters.value.findIndex((i) => i === e);
      selectedFilters.value.splice(idx, 1);
    } else {
      selectedFilters.value.push(e);
    }

    scrollToProductGrid();
  };

  return {
    selectedFilters,
    setSelectedItems,
  };
}
