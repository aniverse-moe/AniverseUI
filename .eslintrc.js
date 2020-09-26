module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'quote-props': ['error', 'consistent'],

    /*
     * vue rules
     */
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'always'
      }
    }]
  }
}
