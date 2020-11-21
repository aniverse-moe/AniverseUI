<template>
  <component :is="errorPage" :error="error" />
</template>

<script>
import { AnivStatusCodes } from '~/lib/utils/HttpStatusCodes'
import ApiUnavailableError from '~/components/errors/ApiUnavailableError.vue'
import PageNotFoundError from '~/components/errors/PageNotFoundError.vue'
import UnknownError from '~/components/errors/UnknownError.vue'

export default {
  props: {
    error: { type: Object, default: () => {} },
  },

  computed: {
    errorPage () {
      switch (this.error.statusCode) {
        case AnivStatusCodes.NOT_FOUND_404: return PageNotFoundError
        case AnivStatusCodes.API_UNAVAILABLE_503: return ApiUnavailableError
        default: return UnknownError
      }
    }
  },

  mounted () {
    // eslint-disable-next-line no-console
    console.error(`Error page. Status Code: ${this.error.statusCode}. Message: ${this.error.message}`)
  }
}
</script>

<!-- eslint-disable-next-line vue-scoped-css/require-scoped -->
<style lang="scss">
/*
 * classes for inner error component:
 */

.error-container {
  @apply mt-4 p-3 pl-1 border-solid border-2 rounded border-gray-400;
  display: grid;
  grid-template-columns: 11fr; // only one column for details. the icon is below

  @screen md {
    @apply pl-3;
    grid-template-columns: 11fr 1fr; // two columns, one for details and one for icon
  }
}

.icon-color {
  @apply text-gray-600;
}

.icon-position {
  margin-left: 0.45rem;
  margin-right: 0.45rem;
  margin-top: 2.25rem;

  display: flex;
  flex-direction: column;

  align-items: center;
  align-self: center;
  justify-self: center;
  text-align: center;

  @screen md {
    margin-top: 0;
    flex-direction: row;
  }
}

.status-code {
  @apply text-sm;

  @screen md {
    @apply transform rotate-90;
  }
}

.error-title {
  @apply font-bold;
}

</style>
