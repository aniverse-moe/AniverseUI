export default (context, inject) => {
  window.onNuxtReady(() => {
    console.log(`LAST_COMMIT_SHA: ${context.$config.LAST_COMMIT_SHA}`)
  })
}
