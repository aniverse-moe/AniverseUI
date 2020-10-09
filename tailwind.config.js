/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 ** Nuxt default: https://tailwindcss.nuxtjs.org/tailwind-config
 */
module.exports = {
  theme: {
    screens: {
      // default tailwind sizes:
      'sm': { 'min': '1px' },
      'md': { 'min': '768px' },
      'lg': { 'min': '1024px' },
      'xl': { 'min': '1280px' },
      // below sizes:
      '-md': { 'max': '767px' },
      '-lg': { 'max': '1023px' },
      '-xl': { 'max': '1279px' },
    }
  },

  variants: {},

  plugins: [],

  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },

  // See https://tailwindcss.com/docs/upcoming-changes
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
