// @ts-check

import { AnimeApi } from '~/lib/api/AnimeApi'
import { ApiModesEnum } from '~/lib/api/mode/ApiModesEnum'
import { createFakeNuxtContext } from './fake/createFakeNuxtContext'
import FakeStrapi from './fake/FakeStrapi'

const localAnimeApi = new AnimeApi(createFakeNuxtContext(ApiModesEnum.LOCAL))
const remoteAnimeApi = new AnimeApi(createFakeNuxtContext(ApiModesEnum.REMOTE))

/** @type {[string, AnimeApi][]} */
const apiForEachMode = [['LOCAL', localAnimeApi], ['REMOTE', remoteAnimeApi]]

describe("AnimeApi", () => {
  beforeEach(() => {
    jest.restoreAllMocks()
  })

  describe("func getAnimeItemByIdAsync", () => {
    test.each(apiForEachMode)("%p: returns entry", async (modeName, api) => {
      const animeItem = await api.getAnimeItemByIdAsync({ id: 1 })
      expect(animeItem?.title?.englishTitle).toMatch(/Steins/)
    })

    test.each(apiForEachMode)("%p: returns undefined when not found", async (modeName, api) => {
      const animeItem = await api.getAnimeItemByIdAsync({ id: 99999999 })
      expect(animeItem).toBe(undefined)
    })

    test('local and remote are different', async () => {
      jest.spyOn(FakeStrapi, 'findOne').mockResolvedValue({ Description: "_new_" })
      const localRes = await localAnimeApi.getAnimeItemByIdAsync({ id: 1 })
      const remoteRes = await remoteAnimeApi.getAnimeItemByIdAsync({ id: 1 })
      expect(remoteRes?.description).toEqual("_new_")
      expect(localRes?.description).not.toEqual("_new_")
    })
  })

  describe("func getTopAnimeItemsAsync", () => {
    test.each(apiForEachMode)("%p: returns top N items", async (modeName, api) => {
      const topAnimeItems = await api.getTopAnimeItemsAsync({ limit: 2 })
      expect(topAnimeItems.length).toBe(2)
      expect(topAnimeItems[1]?.title?.englishTitle).toMatch(/Fate/)
    })

    test('local and remote are different', async () => {
      jest.spyOn(FakeStrapi, 'find').mockResolvedValue([{ Description: "_new_" }])
      const localRes = await localAnimeApi.getTopAnimeItemsAsync({ limit: 1 })
      const remoteRes = await remoteAnimeApi.getTopAnimeItemsAsync({ limit: 1 })
      expect(remoteRes[0]?.description).toEqual("_new_")
      expect(localRes[0]?.description).not.toEqual("_new_")
    })
  })

  describe("func getTopAnimeTitlesAsync", () => {
    test.each(apiForEachMode)("%p: returns top N titles", async (modeName, api) => {
      const topAnimeItems = await api.getTopAnimeTitlesAsync({ limit: 2 })
      expect(topAnimeItems.length).toBe(2)
      expect(topAnimeItems[1]?.englishTitle).toMatch(/Fate/)
    })

    test('local and remote are different', async () => {
      jest.spyOn(FakeStrapi, 'find').mockResolvedValue([{ title: { EnglishTitle: "_new_" } }])
      const localRes = await localAnimeApi.getTopAnimeTitlesAsync({ limit: 1 })
      const remoteRes = await remoteAnimeApi.getTopAnimeTitlesAsync({ limit: 1 })
      expect(remoteRes[0]?.englishTitle).toEqual("_new_")
      expect(localRes[0]?.englishTitle).not.toEqual("_new_")
    })
  })
})
