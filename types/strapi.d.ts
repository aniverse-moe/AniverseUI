/**
 * 'strapi' plugin type declarations.
 * See https://typescript.nuxtjs.org/cookbook/plugins.html
 *
 * Delete and use official types when published.
 * Follow 'Typescript support' issue: https://github.com/nuxt-community/strapi-module/issues/61
 */

import './vuex'

declare module '@nuxt/types' {
  interface Context {
    $strapi: any
  }

  interface NuxtAppOptions {
    $strapi: any
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $strapi: any
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $strapi: any
  }
}
