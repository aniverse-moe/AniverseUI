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
    /*
     * eslint rules
     */
    'arrow-parens': ['error', 'always'],
    'brace-style': ['error', 'stroustrup', { 'allowSingleLine': true }],
    'comma-dangle': ['error', 'only-multiline'],
    'no-lonely-if': 'off',
    'no-unused-vars': 'warn',
    'object-shorthand': 'off',
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
