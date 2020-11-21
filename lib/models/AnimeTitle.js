// @ts-check

import _ from 'lodash'

/**
 * @typedef {Object} AnimeTitleArgs
 * @property {number=} id
 * @property {string=} romajiTitle
 * @property {string=} japaneseTitle
 * @property {string=} englishTitle
 * @property {string=} hebrewTitle
 * @property {boolean=} isHebrewFantitle
 * @property {number=} animeItem
 * @property {number=} franchise
 * @property {number=} distributor
 */

export class AnimeTitle {
  /**
   * @param {AnimeTitleArgs=} args
   */
  constructor (args) {
    /** @type {number} */
    this.id = _.defaultTo(args?.id, 0)

    /** @type {string} */
    this.romajiTitle = _.defaultTo(args?.romajiTitle, '')

    /** @type {string} */
    this.japaneseTitle = _.defaultTo(args?.japaneseTitle, '')

    /** @type {string} */
    this.englishTitle = _.defaultTo(args?.englishTitle, '')

    /** @type {string} */
    this.hebrewTitle = _.defaultTo(args?.hebrewTitle, '')

    /** @type {boolean} */
    this.isHebrewFantitle = _.defaultTo(args?.isHebrewFantitle, false)

    /** @type {number=} */
    this.animeItem = _.defaultTo(args?.animeItem, undefined)

    /** @type {number=} */
    this.franchise = _.defaultTo(args?.franchise, undefined)

    /** @type {number=} */
    this.distributor = _.defaultTo(args?.distributor, undefined)
  }

  get idStr () { return `${this.id}` }

  /**
   * @param {any} obj
   * @return {AnimeTitle=}
   */
  static fromApiAnimeItem (obj) {
    if (!obj) { return undefined }

    return new AnimeTitle({
      id: parseInt(obj.id),
      romajiTitle: obj.title.RomajiTitle,
      japaneseTitle: obj.title.JapaneseTitle,
      englishTitle: obj.title.EnglishTitle,
      hebrewTitle: obj.title.HebrewTitle,
      isHebrewFantitle: obj.title.IsHebrewFantitle,
      animeItem: parseInt(obj?.title?.anime_item),
      franchise: parseInt(obj?.title?.franchise),
      distributor: parseInt(obj?.title?.distributor),
    })
  }

  /**
   * @param {any} obj
   * @return {AnimeTitle=}
   */
  static fromApiAnimeTitle (obj) {
    if (!obj) { return undefined }

    return new AnimeTitle({
      id: parseInt(obj.id),
      romajiTitle: obj.RomajiTitle,
      japaneseTitle: obj.JapaneseTitle,
      englishTitle: obj.EnglishTitle,
      hebrewTitle: obj.HebrewTitle,
      isHebrewFantitle: obj.IsHebrewFantitle,

      // obj.anime_item can be id number OR object
      animeItem: parseInt(_.has(obj, 'anime_item.id') ? obj.anime_item.id : obj.anime_item),

      // obj.franchise can be id number OR object
      franchise: parseInt(_.has(obj, 'franchise.id') ? obj.franchise.id : obj.franchise),

      // obj.distributor can be id number OR object
      distributor: parseInt(_.has(obj, 'distributor.id') ? obj.distributor.id : obj.distributor)
    })
  }
}
