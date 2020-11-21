// @ts-check

/**
 * Track and change api modes
 */

import Vue from 'vue'
import { ApiModesEnum } from './ApiModesEnum'

export class ApiModeManager {
  /**
   * @type {{
   * apiMode: ApiModesEnum
   * }}
   */
  #state

  /**
   * @param {ApiModesEnum} apiMode
   */
  constructor (apiMode) {
    // Make reactive state object
    this.#state = Vue.observable({ apiMode: apiMode })
  }

  /**
   * @returns {ApiModesEnum}
   */
  get currApiMode () {
    return this.#state.apiMode
  }

  /**
   * @returns {boolean}
   */
  get isLocal () {
    return this.#state.apiMode === ApiModesEnum.LOCAL
  }

  /**
   * @returns {boolean}
   */
  get isRemote () {
    return this.#state.apiMode === ApiModesEnum.REMOTE
  }

  /**
   * @returns {void}
   */
  setToLocal () {
    this.#state.apiMode = ApiModesEnum.LOCAL
  }

  /**
   * @returns {void}
   */
  setToRemote () {
    this.#state.apiMode = ApiModesEnum.REMOTE
  }
}
