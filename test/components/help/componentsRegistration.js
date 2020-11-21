/**
 * Functions to help with component registration.
 *
 * See 'auto scan feature causes some tests failure':
 * https://github.com/nuxt/components/issues/58
 *
 * Also see:
 * https://github.com/facebook/jest/issues/7184
 * https://github.com/facebook/jest/issues/3832
 */

import path from 'path'
import glob from 'glob'
import Vue from 'vue'

/**
 * Get array with global side components that normally appear in nuxt.config
 * and registered by Nuxt
 * @return {string[]}
 */
export const getSideComponents = () => ['font-awesome-icon']

/**
 * Register all components in 'components' folder
 * @return {void}
 */
export const registerAllLocalVueComponents = () => {
  const componentsDir = path.join(process.cwd(), 'components')
  glob.sync(path.join(componentsDir, '**/*.vue')).forEach((file) => {
    const name = file?.match(/(\w*)\.vue$/)?.[1]
    if (name) {
      Vue.component(name, require(file))
    }
  })
}
