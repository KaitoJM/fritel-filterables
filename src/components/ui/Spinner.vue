<template>
  <div class="fritel-filterables-app--spinner"></div>
</template>
<style scoped>
.fritel-filterables-app--spinner {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 4px solid #f5f5f7;
  border-top: 4px solid #d6001c;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
