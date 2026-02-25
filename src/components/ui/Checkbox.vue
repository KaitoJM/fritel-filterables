<script setup>
const props = defineProps({
  checked: Boolean,
  name: String,
});

defineEmits(["change"]);
</script>

<template>
  <label class="fritel-filterables-checkbox--label" :htmlFor="'cb_' + props.name">
    <input
      v-bind="$attrs"
      type="checkbox"
      :checked="props.checked"
      class="fritel-filterables-checkbox--input peer"
      @change="(e) => $emit('change', e.currentTarget.value)"
    />
    <span class="fritel-filterables-checkbox--icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-3.5 w-3.5"
        viewBox="0 0 20 20"
        fill="white"
        stroke="white"
        stroke-width="1"
      >
        <path
          fill-rule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </span>
  </label>
</template>

<style lang="scss">
.fritel-filterables-checkbox {
  &--label {
    @apply relative flex items-center rounded-full cursor-pointer mb-0;
  }
  &--input {
    &:before {
      content: "";
    }

    @apply border-solid relative h-5 w-5 cursor-pointer appearance-none border border-slate-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-500 before:opacity-0 before:transition-opacity checked:border-primary checked:bg-primary checked:before:bg-primary hover:before:opacity-10;
  }
  &--icon {
    @apply absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100;
  }
}
</style>
