
<template>
  <span class="icon-circle">
    <font-awesome-icon :icon="['fas', 'exclamation']" />
  </span>
</template>

<style scoped>
.icon-circle {
  @apply flex items-center justify-center rounded-full border-2 border-current;
  height: 2.5em;
  width: 2.5em;
}
</style>
