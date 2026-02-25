<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: "neutral",
    validator: (v) => ["primary", "success", "danger", "neutral"].includes(v),
  },
});
</script>

<template>
  <span class="fritel-filterables-badge" :class="`fritel-filterables-badge--${props.variant}`">
    <slot />
  </span>
</template>

<style lang="scss">
.fritel-filterables-badge {
  @apply inline-flex items-center rounded px-2 py-0.5 text-xs font-medium w-max;

  &--primary {
    @apply bg-primary text-white;
  }

  &--success {
    @apply bg-green-700 text-white;
  }

  &--danger {
    @apply bg-red-700 text-white;
  }

  &--neutral {
    @apply bg-[#f5f5f7] text-[#1a1a1a];
  }
}
</style>
