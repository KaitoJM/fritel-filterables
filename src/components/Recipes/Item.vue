<template>
  <li
    class="fritel-filterables-grid--item"
    @click="emit('preview', props.pageId)"
  >
    <div class="fritel-filterables-grid--image-container">
      <img :src="props.image" />
    </div>
    <div class="fritel-filterables-grid--details">
      <p class="fritel-filterables-grid--author">
        <!-- Font Awesome fa-solid fa-user -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
          <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/>
        </svg>
        {{ props.author }}
      </p>
      <div class="fritel-filterables-grid--item-titlebar">
        <h3 class="fritel-filterables-grid--title">
          {{ props.name }}
        </h3>
      </div>
      <div class="fritel-filterables-grid--tags">
        <Badge v-for="tag in visibleTags" :key="tag">{{ tag }}</Badge>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Badge from "../ui/Badge.vue";
import { useCategoriesStore } from "../../stores/categoriesStore";

const props = defineProps<{
  name: string;
  author: string;
  image: string;
  pageId: string;
  tags: [];
}>();

const emit = defineEmits<{ preview: [pageId: string] }>();

const categoriesStore = useCategoriesStore();

const visibleTags = computed(() => {
  const categoryIds = new Set(
    categoriesStore.categories.map((c) => c.id.toLowerCase()),
  );
  return props.tags.filter((tag) => categoryIds.has(tag.toLowerCase()));
});
</script>

<style scoped lang="scss">
.fritel-filterables-grid {
  &--item {
    @apply rounded-lg overflow-clip border relative cursor-pointer;
  }

  &--image-container {
    @apply h-60 overflow-clip md:h-80;

    img {
      @apply object-cover h-80 hover:scale-110 w-full transition-transform duration-700;
    }
  }

  &--author {
    @apply absolute top-4 left-4 bg-primary py-2 px-6 text-[1.2rem] font-bold text-white rounded
           flex items-center gap-2;

    svg {
      width: 1rem;
      height: 1rem;
      flex-shrink: 0;
    }
  }

  &--title {
    @apply text-[1.5rem] font-[500] text-center text-primary;
  }

  &--details {
    @apply p-8 flex flex-col gap-2;
  }

  &--tags {
    @apply flex flex-wrap gap-1 justify-center mt-4;
  }
}
</style>
