<template>
  <div class="container-under-navbar">
    <div class="page-order">
      <article>
        <h1 class="heb-title">
          {{ currAnime.title.hebrewTitle }}
        </h1>
        <h1 class="eng-title">
          {{ currAnime.title.englishTitle }}
        </h1>
        <div>
          <span class="font-bold">מספר פרקים:</span>
          <span>{{ currAnime.episodes }}</span>
        </div>
        <div>
          <span class="font-bold">תקציר:</span>
          <p class="lg:ml-20">{{ currAnime.description }}</p>
        </div>
      </article>

      <div class="inner-menu">
        <h4 class="-lg:text-xl">
          אנימות שאולי תאהבו:
        </h4>
        <ul>
          <li v-for="related in relatedAnimes" :key="related.id">
            <nuxt-link :to="`/anime/${related.id}`">
              {{ related.hebrewTitle }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { AnimeTitle, AnimeItem } from '~/lib/models'
import { AnivStatusCodes } from '~/lib/utils/HttpStatusCodes'

export default {
  async asyncData ({ params, error, $api }) {
    let currAnime
    let relatedAnimes

    try {
      currAnime = await $api.anime.getAnimeItemByIdAsync({ id: params.id })
    }
    catch (e) {
      return error({
        statusCode: AnivStatusCodes.API_UNAVAILABLE_503,
        message: `Can't get anime with the id ${params.id} from the api. Message: ${e}`
      })
    }

    // If the api is working but the anime not found
    if (!currAnime) {
      return error({
        statusCode: AnivStatusCodes.NOT_FOUND_404,
        message: `Can't find anime with the id ${params.id}`
      })
    }

    try {
      const topAnimeTitles = await $api.anime.getTopAnimeTitlesAsync({ limit: 5 })
      relatedAnimes = topAnimeTitles.filter((a) => a.id !== parseInt(params.id))
    }
    catch (e) {
      return error({
        statusCode: AnivStatusCodes.API_UNAVAILABLE_503,
        message: `Can't get related anime list from the api. Message: ${e}`
      })
    }

    return { currAnime, relatedAnimes }
  },

  data () {
    return {
      /** @type {AnimeItem} */
      currAnime: new AnimeItem(), // init from asyncData

      /** @type {AnimeTitle[]} */
      relatedAnimes: [] // init from asyncData
    }
  },

  head () {
    return {
      title: `${this.currAnime.title.englishTitle}`
    }
  },
}
</script>

<style scoped lang="scss">
.container-under-navbar {
  margin-top: 35px;
}

.page-order {
  @apply flex flex-col;

  @screen lg {
    @apply flex-row-reverse;
  }
}

article * {
  margin-bottom: 1rem;
}

.inner-menu {
  margin-top: 28px;
  padding-top: 28px;
  border-top: 1px solid var(--main-color-1);

  @screen lg {
    margin-top: unset;
    border-top: unset;
    padding-top: unset;

    min-width: 234px;
    max-width: 234px;
    padding-left: 2rem;
    padding-right: 4px;
    border-left: 1px solid var(--main-color-1);
    margin-left: 28px;
  }
}

// eslint-disable-next-line vue-scoped-css/no-unused-selector
%title {
  font-size: 2rem;
}

.heb-title {
  @extend %title;
  direction: rtl;
}

.eng-title {
  @extend %title;
  direction: ltr;
}

// eslint-disable-next-line vue-scoped-css/no-unused-selector
a {
  color: #4fb99f;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #068587;
  }
}
</style>
