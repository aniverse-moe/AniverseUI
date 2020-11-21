// @ts-check

import { BaseApi } from './BaseApi'
import { AnimeItem, AnimeTitle } from '~/lib/models'

export class AnimeApi extends BaseApi {
  /**
   * Get anime item by id from api
   * @param {Object} arg
   * @param {number | String} arg.id
   * @returns {Promise<AnimeItem | undefined>} Anime item, or undefined if not found
   */
  async getAnimeItemByIdAsync ({ id }) {
    const intId = (typeof id === 'string') ? parseInt(id) : id
    let animeItem

    // TODO: try to get from cache

    if (this.nuxtContext.$api.mode.isLocal) {
      animeItem = this.localapi.get('anime-items').find((a) => a.id === intId)
    }
    else {
      try {
        animeItem = await this.nuxtContext.$strapi.findOne('anime-items', intId)
      }
      catch (e) {
        // If unknown api error
        if (e.response?.data !== 'Not Found') {
          throw e
        }
      }
    }

    return (animeItem) ? AnimeItem.fromApiAnimeItem(animeItem) : undefined
  }

  /**
   * Get top N anime items from api
   * @param {Object} arg
   * @param {number} arg.limit Max anime items to get
   * @returns {Promise<AnimeItem[]>}
   */
  async getTopAnimeItemsAsync ({ limit }) {
    let animeItems = []

    // TODO: Try to get from cache

    if (this.nuxtContext.$api.mode.isLocal) {
      animeItems = this.localapi.get('anime-items').slice(0, limit)
    }
    else {
      animeItems = await this.nuxtContext.$strapi.find('anime-items', { '_limit': limit })
    }

    return animeItems.map(AnimeItem.fromApiAnimeItem)
  }

  /**
   * Get top N anime titles from api
   * @param {Object} arg
   * @param {number} arg.limit Max anime titles to get
   * @returns {Promise<AnimeTitle[]>}
   */
  async getTopAnimeTitlesAsync ({ limit }) {
    let animeTitles = []

    // TODO: Try to get from cache

    if (this.nuxtContext.$api.mode.isLocal) {
      animeTitles = this.localapi.get('anime-items').slice(0, limit)
    }
    else {
      // TODO: Use 'titles' api instead of 'anime-items'. then map with AnimeTitle.fromApiAnimeTitle
      animeTitles = await this.nuxtContext.$strapi.find('anime-items', { '_limit': limit })
    }

    return animeTitles.map(AnimeTitle.fromApiAnimeItem)
  }
}
