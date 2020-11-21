// @ts-check

const localCollections = {
  'anime-items': require('./anime-items.json'),
  'titles': require('./titles.json')
}

export class Localapi {
  /**
   * @param {string} collectionName
   * @return {any}
   */
  get (collectionName) {
    return localCollections[collectionName]
  }

  /**
   * @param {string} collectionName
   * @return {Promise<any>}
   */
  async getAsync (collectionName) {
    return this.get(collectionName)
  }
}
