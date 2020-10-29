import webpack from 'webpack'
import { ApiModes } from './plugins/apimode'

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: (titleChunk) => {
      return titleChunk ? `Aniverse | ${titleChunk}` : 'Aniverse'
    },
    htmlAttrs: {
      lang: 'he'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/global-colors.css',
    '@/assets/css/global-fonts.css',
    '@/assets/css/global-site.scss',
    '@/assets/css/global-icons.scss',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/on-startup.client.js',
    '~/plugins/apimode.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/fontawesome-module
    '@nuxtjs/fontawesome',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios', // TODO: maybe delete axios. (we have strapi)
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://strapi.nuxtjs.org
    '@nuxtjs/strapi',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  strapi: {
    url: process.env.ANIVERSE_API_URL || 'http://localhost:1337'
  },

  // fontawesome module configuration (https://github.com/nuxt-community/fontawesome-module)
  fontawesome: {
    icons: {
      // https://fontawesome.com/icons?s=solid (Free)
      solid: ['faWifi'],
      // https://fontawesome.com/icons?s=brands (Free)
      brands: [],
    }
  },

  router: {
    // If available, add the name of the repo to the router.base
    // See https://nuxtjs.org/faq/github-pages
    base: process.env.NUXT_ROUTER_BASE || ''
  },

  // Value of this object is accessible from both client and server using $config
  // See https://nuxtjs.org/guide/runtime-config
  publicRuntimeConfig: {
    LAST_COMMIT_SHA: process.env.LAST_COMMIT_SHA,
    API_START_MODE: process.env.NODE_ENV === 'production'
      ? ApiModes.REMOTE
      : ApiModes.LOCAL
  },

  generate: {
    // Set fallback to true when using static host, for direct access to dynamic routes,
    // and for custom '404.html' instead of the default '200.html'.
    // See https://nuxtjs.org/guide/routing/#spa-fallback
    // See https://stackoverflow.com/questions/50973576/nuxtjs-spa-dynamic-routes-generate-404-after-prod-deployment
    fallback: true,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    plugins: [
      // See https://nuxtjs.org/faq/webpack-plugins/
      new webpack.ProvidePlugin({
        // global modules
        _: 'lodash'
      })
    ]
  }
}
