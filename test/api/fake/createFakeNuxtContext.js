import { ApiModesEnum } from '~/lib/api/mode/ApiModesEnum'
import { ApiModeManager } from '~/lib/api/mode/ApiModeManager'
import FakeStrapi from './FakeStrapi'

/**
 * @param {ApiModesEnum} apiMode
 * @returns {NuxtContext}
 */
export function createFakeNuxtContext (apiMode) {
  return {
    $api: {
      mode: new ApiModeManager(apiMode)
    },
    $strapi: FakeStrapi
  }
}
