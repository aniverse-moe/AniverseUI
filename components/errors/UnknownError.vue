<template>
  <div class="error-container">
    <div>
      <h1 class="error-title">התרחשה שגיאה לא ידועה</h1>
      <p class="error-body">
        נסו שוב במועד מאוחר יותר.
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
