// @ts-check

/**
 * Plugin for api usage
 */

import { ApiMode } from '~/lib/api/mode/ApiMode'

export class ApiManager {
  /** @type {ApiMode} */
  mode

  /**
   * @param {Context} nuxtContext
   */
  constructor (nuxtContext) {
    this.mode = new ApiMode(nuxtContext.$config.API_START_MODE)
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
