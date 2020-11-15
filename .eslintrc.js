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
    'plugin:nuxt/recommended',
    'plugin:vue-scoped-css/vue3-recommended',
  ],

  plugins: [
  ],

  rules: {
    /*
     * eslint rules
     */
    'arrow-parens': ['error', 'always'],
    'brace-style': ['error', 'stroustrup', { 'allowSingleLine': true }],
    'comma-dangle': ['error', 'only-multiline'],
    'no-lonely-if': 'off',
    'no-unused-vars': 'off', // disabled because JSDoc types are not recognized
    'object-shorthand': 'off',
    'quote-props': ['error', 'consistent'],
    'quotes': 'off',
    'import/order': 'off',
    'no-useless-constructor': 'off',

    /*
     * vue rules
     */
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'always',
        'normal': 'any',
        'component': 'always'
      }
    }],
    'vue/singleline-html-element-content-newline': 'off'
  },

  globals: {
    // With global `_` we don't get no-undef error when using lodash.
    // 'false' means the variable can't be overwritten, so the code:
    //   _ = 'something else' would yield an error.
    '_': false
  },
}
