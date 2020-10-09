<template>
  <div class="container-under-navbar">
    <div class="container-middle">
      <div>
        <h1 class="title">
          אנימות
        </h1>
        <ul>
          <li v-for="anime in animeList" :key="anime.id">
            <nuxt-link :to="`/anime/${anime.id}`">
              {{ anime.hebTitle }} ({{ anime.engTitle }})
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import fakeAnime from '~/assets/fakeData/anime'

export default {
  data () {
    return {
      animeList: fakeAnime.animeList,
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
