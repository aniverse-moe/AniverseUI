// @ts-check

import { AnimeTitle } from './AnimeTitle'
import _ from 'lodash'

/**
 * @typedef {Object} AnimeItemArgs
 * @property {number=} id
 * @property {AnimeTitle=} title
 * @property {string=} description
 * @property {string=} kind
 * @property {number=} episodes
 * @property {number=} ageRating
 * @property {any[]=} otherSites
 * @property {string=} image
 * @property {object=} franchise
 * @property {any[]=} distributors
 * @property {any[]=} releases
 */

export class AnimeItem {
  /**
   * @param {AnimeItemArgs=} args
   */
  constructor (args) {
    /** @type {number} */
    this.id = _.defaultTo(args?.id, 0)

    /** @type {AnimeTitle} */
    this.title = _.defaultTo(args?.title, new AnimeTitle())

    /** @type {string} */
    this.description = _.defaultTo(args?.description, '')

    /** @type {string} */
    this.kind = _.defaultTo(args?.kind, 'anime')

    /** @type {number} */
    this.episodes = _.defaultTo(args?.episodes, 0)

    /** @type {number} */
    this.ageRating = _.defaultTo(args?.ageRating, 15)

    /** @type {any[]} */
    this.otherSites = _.defaultTo(args?.otherSites, [])

    /** @type {string=} */
    this.image = _.defaultTo(args?.image, undefined)

    /** @type {object=} */
    this.franchise = _.defaultTo(args?.franchise, undefined)

    /** @type {any[]} */
    this.distributors = _.defaultTo(args?.distributors, [])

    /** @type {any[]} */
    this.releases = _.defaultTo(args?.releases, [])
  }

  get idStr () { return `${this.id}` }

  /**
   * @param {any} obj
   * @return {AnimeItem=}
   */
  static fromApiAnimeItem (obj) {
    if (!obj) { return undefined }

    return new AnimeItem({
      id: parseInt(obj.id),
      title: AnimeTitle.fromApiAnimeTitle(obj.title),
      description: obj.Description,
      kind: obj.Kind,
      episodes: obj.Episodes,
      ageRating: obj.AgeRating,
      otherSites: obj.OtherSites,
      image: obj.Image,
      franchise: obj.franchise,
      distributors: obj.distributors,
      releases: obj.releases
    })
  }
}
