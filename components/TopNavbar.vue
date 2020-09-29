<template>
  <nav class="nav">
    <div class="logo">
      <nuxt-link :to="{ name: 'index' }" class="logo text-lg upper-nav">
        Aniverse | אינדקס הפנסאב הגדול
      </nuxt-link>

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
  background-color: #4e7f8a; // TODO: use color variable
  padding: 3px 10px 3px 10px;
  margin-top: 10px;
  min-height: 35px;
  max-height: 35px;
  display: flex;
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
