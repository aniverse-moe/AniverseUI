/**
 * 'api' plugin type declarations.
 * See https://typescript.nuxtjs.org/cookbook/plugins.html
 */

import './vuex'
import { ApiManager } from '../plugins/api'

declare module '@nuxt/types' {
  interface Context {
    $api: ApiManager
  }

  interface NuxtAppOptions {
    $api: ApiManager
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $api: ApiManager
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $api: ApiManager
  }
}
