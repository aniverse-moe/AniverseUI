// @ts-check

/**
 * Mock strapi plugin
 */

import { Localapi } from '~/assets/localapi/Localapi'
import _ from 'lodash'

const localapi = new Localapi()

const FakeStrapi = {
  findOne: async (collectionName, id) => {
    return localapi.get(collectionName).find((a) => parseInt(a.id) === id)
  },

  find: async (collectionName, params) => {
    return (_.has(params, '_limit'))
      ? localapi.get(collectionName).slice(0, params._limit)
      : localapi.get(collectionName)
  }
}

export default FakeStrapi
