// @ts-check

import { Localapi } from '~/assets/localapi/Localapi'

/**
 * @abstract
 */
export class BaseApi {
  /**
   * @type {NuxtContext}
   * @protected
   */
  nuxtContext

  /**
   * @type {Localapi}
   * @protected
   */
  localapi

  /**
   * @param {NuxtContext} nuxtContext
   */
  constructor (nuxtContext) {
    this.nuxtContext = nuxtContext
    this.localapi = new Localapi()
  }
}
