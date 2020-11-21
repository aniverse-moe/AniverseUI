<template>
  <div class="container-under-navbar">
    <div class="container-middle">
      <div>
        <h1 class="title">
          אנימות
        </h1>
        <ul>
          <li v-for="animeTitle in animeTitles" :key="animeTitle.id">
            <nuxt-link :to="`/anime/${animeTitle.id}`">
              {{ animeTitle.hebrewTitle }} ({{ animeTitle.englishTitle }})
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { AnimeTitle } from '~/lib/models'
import { AnivStatusCodes } from '~/lib/utils/HttpStatusCodes'

export default {
  async asyncData ({ error, $api }) {
    let animeTitles

    try {
      animeTitles = await $api.anime.getTopAnimeTitlesAsync({ limit: 10 })
    }
    catch (e) {
      return error({
        statusCode: AnivStatusCodes.API_UNAVAILABLE_503,
        message: `Can't get anime list from api. Message: ${e}`
      })
    }

    return { animeTitles }
  },

  data () {
    return {
      /** @type {AnimeTitle[]} */
      animeTitles: [],
    }
  },

  head () {
    return {
      title: 'Anime List',
    }
  },
}
</script>

<style scoped>
.container-under-navbar {
  margin-top: 35px;
}

.container-middle {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
}

.title {
  font-family: Bellefair-Regular, "Segoe UI";
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
