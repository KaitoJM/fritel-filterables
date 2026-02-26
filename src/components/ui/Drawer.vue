<script setup lang="ts">
import { useDrawer } from "../../composables/useDrawer";

const { isOpen, close } = useDrawer();
</script>

<template>
  <!-- Backdrop — mobile only, hidden on sm+ -->
  <Transition name="drawer-fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-40 bg-black/50 md:hidden"
      @click="close"
    />
  </Transition>

  <!-- Panel -->
  <!-- Mobile: fixed bottom sheet that slides up when open.      -->
  <!-- sm+: static, transparent, no shadow — normal in-flow element. -->
  <div
    class="fritel-drawer-panel"
    :class="isOpen ? 'translate-y-0' : 'translate-y-full'"
  >
    <!-- Close button — mobile only -->
    <div class="fritel-drawer-panel--header">
      <button class="fritel-drawer-panel--close" type="button" @click="close">
        <!-- Font Awesome xmark -->
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
    </div>

    <div class="fritel-drawer-panel--content">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.fritel-drawer-panel {
  /* Mobile: fixed bottom sheet */
  @apply fixed bottom-0 left-0 right-0 z-50
         max-h-[80vh] overflow-y-auto
         bg-white rounded-t-2xl shadow-2xl
         transition-transform duration-300 ease-in-out;

  /* sm+: become a normal in-flow element — no drawer behaviour */
  @apply md:static md:z-auto md:max-h-none md:overflow-visible
         md:bg-transparent md:rounded-none md:shadow-none md:translate-y-0;

  &--header {
    @apply flex md:hidden items-center justify-end p-4 border-b border-gray-100;
  }

  &--close {
    @apply w-8 h-8 flex items-center justify-center
           rounded-full bg-gray-100 hover:bg-primary hover:text-white
           transition-colors cursor-pointer;

    svg {
      @apply w-3 h-3;
    }
  }

  &--content {
    @apply p-4 md:p-0;
  }
}

/* Backdrop transition */
.drawer-fade-enter-active,
.drawer-fade-leave-active {
  transition: opacity 0.25s ease;
}
.drawer-fade-enter-from,
.drawer-fade-leave-to {
  opacity: 0;
}
</style>
