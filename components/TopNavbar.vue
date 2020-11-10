<template>
  <nav class="nav">
    <div class="logo">
      <div class="flex justify-between">
        <nuxt-link :to="{ name: 'index' }" class="text-lg upper-nav">
          Aniverse | אינדקס הפנסאב הגדול
        </nuxt-link>

        <!-- API Mode area -->
        <div class="select-none text-left px-1" dir="ltr">
          <div v-if="$api.mode.isLocal">
            <span class="text-red-800">
              <icon-offline />
              <span class="font-bold">Offline API</span>
            </span>
            <button
              class="api-mode-button text-blue-600 border-blue-600"
              @click="$api.mode.setToRemote()"
            >
              Use Online
            </button>
          </div>
          <div v-else>
            <span class="text-blue-600">
              <font-awesome-icon :icon="['fas', 'wifi']" />
              <span class="font-bold">Online API</span>
            </span>
            <button
              class="api-mode-button text-red-800 border-red-800"
              @click="$api.mode.setToLocal()"
            >
              Use Offline
            </button>
          </div>
        </div>
      </div>

      <div class="subheader">
        <ul>
          <li>
            <nuxt-link :to="`/anime`">
              אנימות
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: lighter;
  letter-spacing: 0.5px;
  direction: rtl;
}

.nav .logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

.upper-nav {
  padding-right: 3px;
}

.nav .logo .subheader {
  opacity: 0.7;
  background-color: var(--main-color-1);
  padding: 3px 10px 3px 10px;
  margin-top: 10px;
  min-height: 35px;
  max-height: 35px;
  display: flex;
}

.api-mode-button {
  @apply font-bold border-solid border-2 rounded px-1 cursor-pointer shadow-sm bg-gray-100;

  &:focus {
    @apply outline-none;
  }
}

.subheader ul {
  display: flex;
  align-items: center;
}

.subheader li {
  display: inline;
  padding-left: 11px;

  color: rgb(255, 255, 255);
  font-size: 1.2rem;
  font-weight: 400;
  text-decoration: none;
  transition: all 0.3s ease;
}
</style>
