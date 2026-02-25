<script setup>
import { useSearch } from "../../composables/useSearch";

const { searchString } = useSearch();
</script>

<template>
  <div class="fritel-filterables-search">
    <input type="text" v-model="searchString" placeholder="Search..." />
  </div>
</template>

<style lang="scss">
.fritel-filterables-search {
  input {
    @apply bg-[#f5f5f7] p-2 rounded-md mb-3 w-full focus:outline-primary;
  }
}
</style>
