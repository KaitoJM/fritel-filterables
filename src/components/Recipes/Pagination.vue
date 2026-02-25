<script setup>
import { computed } from "vue";

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["update:currentPage"]);

const visiblePages = computed(() => {
  const range = 2;
  const start = Math.max(1, props.currentPage - range);
  const end = Math.min(props.totalPages, props.currentPage + range);
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
});

const showStartEllipsis = computed(() => visiblePages.value[0] > 2);
const showEndEllipsis = computed(
  () => visiblePages.value.at(-1) < props.totalPages - 1,
);

const go = (page) => emit("update:currentPage", page);
</script>

<template>
  <div v-if="totalPages > 1" class="fritel-filterables-pagination">
    <button :disabled="currentPage === 1" @click="go(currentPage - 1)">
      &lsaquo;
    </button>

    <button
      v-if="visiblePages[0] > 1"
      :class="{ active: currentPage === 1 }"
      @click="go(1)"
    >
      1
    </button>

    <span v-if="showStartEllipsis">&hellip;</span>

    <button
      v-for="page in visiblePages"
      :key="page"
      :class="{ active: currentPage === page }"
      @click="go(page)"
    >
      {{ page }}
    </button>

    <span v-if="showEndEllipsis">&hellip;</span>

    <button
      v-if="visiblePages.at(-1) < totalPages"
      :class="{ active: currentPage === totalPages }"
      @click="go(totalPages)"
    >
      {{ totalPages }}
    </button>

    <button :disabled="currentPage === totalPages" @click="go(currentPage + 1)">
      &rsaquo;
    </button>
  </div>
</template>

<style lang="scss">
.fritel-filterables-pagination {
  @apply flex items-center justify-center gap-1 mt-6;

  button {
    @apply w-16 h-16 rounded-md text-[1.5rem] font-medium transition-colors;
    @apply bg-[#f5f5f7] hover:bg-primary hover:text-white;

    &.active {
      @apply bg-primary text-white;
    }

    &:disabled {
      @apply opacity-30 cursor-not-allowed hover:bg-[#f5f5f7] hover:text-inherit;
    }
  }

  span {
    @apply w-9 h-9 flex items-center justify-center text-[1.5rem];
  }
}
</style>
