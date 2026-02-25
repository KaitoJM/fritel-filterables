<script setup lang="ts">
import SkeletonLoader from "../ui/SkeletonLoader.vue";
</script>

<template>
  <div class="fritel-filterables-grid--loader">
    <div class="fritel-filterables-grid--loader--item" v-for="item in 6">
      <SkeletonLoader height="200px" />
      <SkeletonLoader />
      <SkeletonLoader width="80%" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.fritel-filterables-grid {
  &--loader {
    @apply grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3;
  }

  &--loader--item {
    @apply flex-1 flex flex-col gap-4 items-center;
  }
}
</style>
