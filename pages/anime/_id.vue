<template>
  <div class="container-under-navbar">
    <div class="page-order">
      <article>
        <h1 class="heb-title">
          {{ currAnime.hebTitle }}
        </h1>
        <h1 class="eng-title">
          {{ currAnime.engTitle }}
        </h1>
        <p>{{ currAnime.description }}</p>
      </article>

      <div class="inner-menu">
        <h4 class="-lg:text-xl">
          אנימות שאולי תאהבו:
        </h4>
        <ul>
          <li v-for="related in relatedAnimes" :key="related.id">
            <nuxt-link :to="`/anime/${related.id}`">
              {{ related.hebTitle }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import fakeAnime from '~/assets/fakeData/anime'
import { AnivStatusCodes } from '~/lib/utils/HttpStatusCodes'

export default {
  middleware ({ params, error }) {
    // Check if url-anime-id not in animeList
    if (!fakeAnime.animeList.some((e) => e.id === params.id)) {
      return error({ statusCode: AnivStatusCodes.NOT_FOUND_404, message: 'Anime Page Not Found' })
    }
  },

  data () {
    return {
      // The anime id that is specified in the url
      // (Because we named the file _id.vue)
      id: this.$route.params.id,

      animeList: fakeAnime.animeList
    }
  },

  computed: {
    currAnime () {
      return this.animeList.find((a) => a.id === this.id)
    },

    relatedAnimes () {
      return this.animeList.filter((a) => a.id !== this.id)
    },
  },

  head () {
    return {
      title: `${this.currAnime.engTitle}`
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
}

article * {
  margin-bottom: 1rem;
}

.inner-menu {
  margin-top: 28px;
  padding-top: 28px;
  border-top: 1px solid var(--main-color-1);
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

@screen lg {
  .page-order {
    @apply flex-row-reverse;
  }

  .inner-menu {
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
a {
  color: #4fb99f;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #068587;
  }
}
</style>
