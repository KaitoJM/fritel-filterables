<template>
  <div
    class="skeleton-loader"
    :class="[variantClass, { 'skeleton-shimmer': shimmer }]"
    :style="loaderStyle"
  ></div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  width?: string | number;
  height?: string | number;
  variant?: "rectangle" | "circle" | "text";
  shimmer?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  width: "100%",
  height: "20px",
  variant: "rectangle",
  shimmer: true,
});

/**
 * Converts a number or string to a valid CSS dimension
 * @param value - The dimension value (number in pixels or string with units)
 */
const toCssDimension = (value: string | number): string => {
  if (typeof value === "number") {
    return `${value}px`;
  }
  return value;
};

/**
 * Computed style for the skeleton loader
 */
const loaderStyle = computed(() => ({
  width: toCssDimension(props.width),
  height: toCssDimension(props.height),
}));

/**
 * Computed class based on variant prop
 */
const variantClass = computed(() => {
  switch (props.variant) {
    case "circle":
      return "skeleton-circle";
    case "text":
      return "skeleton-text";
    default:
      return "skeleton-rectangle";
  }
});
</script>

<style scoped lang="scss">
.skeleton-loader {
  @apply bg-gray-200 overflow-hidden;
  position: relative;
}

.skeleton-rectangle {
  @apply rounded;
}

.skeleton-circle {
  @apply rounded-full;
}

.skeleton-text {
  @apply rounded;
  height: 1rem;
}

.skeleton-shimmer {
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.2) 20%,
      rgba(255, 255, 255, 0.5) 60%,
      rgba(255, 255, 255, 0)
    );
    animation: shimmer 2s infinite;
  }
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
</style>
