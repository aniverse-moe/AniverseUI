// @ts-check

/**
 * Plugin for api usage
 */

import { ApiModeManager } from '~/lib/api/mode/ApiModeManager'
import { AnimeApi } from '~/lib/api/AnimeApi'

export class ApiManager {
  /**
   * @param {NuxtContext} nuxtContext
   */
  constructor (nuxtContext) {
    this.mode = new ApiModeManager(nuxtContext.$config.API_START_MODE)
    this.anime = new AnimeApi(nuxtContext)
  }
}

/**
 * @param {NuxtContext} context
 * @param {any} inject
 */
export default (context, inject) => {
  const api = new ApiManager(context)

  // Inject in Vue, context and store
  inject('api', api)
}
