// @ts-check

/**
 * Plugin for api usage
 */

import { ApiModeManager } from '~/lib/api/mode/ApiModeManager'

export class ApiManager {
  /** @type {ApiModeManager} */
  mode

  /**
   * @param {Context} nuxtContext
   */
  constructor (nuxtContext) {
    this.mode = new ApiModeManager(nuxtContext.$config.API_START_MODE)
  }
}

/**
 * @param {Context} context
 * @param {any} inject
 */
export default (context, inject) => {
  const api = new ApiManager(context)

  // Inject in Vue, context and store
  inject('api', api)
}
