<script setup lang="ts">
import { ref } from "vue";

defineProps<{ loading?: boolean }>();

const dialogEl = ref<HTMLDialogElement | null>(null);

const open = () => dialogEl.value?.showModal();
const close = () => dialogEl.value?.close();
const onBackdropClick = (e: MouseEvent) => {
  if (e.target === dialogEl.value) close();
};

defineExpose({ open, close });
</script>

<template>
  <dialog
    ref="dialogEl"
    class="fritel-filterables-dialog"
    @click="onBackdropClick"
  >
    <button class="fritel-filterables-dialog--close" @click="close">
      <!-- Font Awesome xmark (fa-solid fa-xmark) -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        fill="currentColor"
      >
        <path
          d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
        />
      </svg>
    </button>

    <div v-if="loading" class="fritel-filterables-dialog--loader">
      Loading...
    </div>
    <slot v-else />
  </dialog>
</template>

<style lang="scss">
@keyframes dialog-show {
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}

@keyframes backdrop-show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fritel-filterables-dialog {
  @apply w-full max-w-[1200px] max-h-[95vh] h-[90vh] rounded-xl p-0 border-0 shadow-2xl;

  /* center the dialog regardless of browser default behaviour */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;

  &[open] {
    animation: dialog-show 0.25s ease forwards;
  }

  &[open]::backdrop {
    @apply bg-black/60;
    animation: backdrop-show 0.25s ease forwards;
  }

  &--close {
    @apply absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center
           bg-white rounded-full shadow hover:bg-primary hover:text-white transition-colors;

    svg {
      @apply w-4 h-4;
    }
  }

  &--loader {
    @apply w-full h-full flex items-center justify-center text-lg text-gray-500;
  }
}
</style>
