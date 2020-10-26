/**
 * Plugin to track and change api modes
 */

import Vue from 'vue'

/**
 * ApiModes Enum
 * @readonly
 * @enum {number}
 */
export const ApiModes = {
  REMOTE: 1,
  LOCAL: 2,
}

class ApiMode {
  /**
   * Init ApiMode object
   * @param {ApiModes} apiMode
   */
  constructor (apiMode) {
    // Make reactive state object
    this.state = Vue.observable({ apiMode: apiMode })
  }

  /**
   * @returns {ApiModes} current api mode
   */
  get apiMode () {
    return this.state.apiMode
  }

  /**
   * Get the ApiModes enum
   */
  get ApiModes () {
    return ApiModes
  }

  /**
   * @returns {boolean} is local mode now
   */
  get isLocal () {
    return this.state.apiMode === ApiModes.LOCAL
  }

  /**
   * @returns {boolean} is remote mode now
   */
  get isRemote () {
    return this.state.apiMode === ApiModes.REMOTE
  }

  setToLocal () {
    this.state.apiMode = ApiModes.LOCAL
  }

  setToRemote () {
    this.state.apiMode = ApiModes.REMOTE
  }
}

export default (context, inject) => {
  const apimode = new ApiMode(context.$config.API_START_MODE)

  // Inject $api in Vue, context and store.
  inject('apimode', apimode)
}
