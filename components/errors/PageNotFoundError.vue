<template>
  <div class="error-container">
    <div>
      <h1 class="error-title">העמוד לא נמצא</h1>
      <p class="error-body">
        העמוד נמחק או הועבר, ואולי מעולם לא היה קיים.
      </p>
    </div>

    <div class="icon-position icon-color">
      <IconCircledExclamation />
      <span class="status-code">{{ error.statusCode }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: { type: Object, default: () => {} },
  },
}
</script>
