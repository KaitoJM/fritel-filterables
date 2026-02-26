<script setup lang="ts">
import { useDrawer } from "../../composables/useDrawer";

const { open } = useDrawer();
</script>

<template>
  <!-- Only rendered on mobile; hidden on sm+ where the drawer is not needed -->
  <button class="fritel-drawer-trigger" type="button" @click="open">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.fritel-drawer-trigger {
  @apply flex md:hidden items-center gap-2 cursor-pointer;
}
</style>
