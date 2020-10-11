module.exports = {
  extends: [
    'stylelint-config-standard',
  ],
  rules: {
    'at-rule-no-unknown': [true,
      {
        ignoreAtRules: [
          // Tailwind words:
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          // SCSS words:
          'extend'
        ],
      },
    ],
    'font-family-no-missing-generic-family-keyword': null,
    'declaration-empty-line-before': null,
    'comment-empty-line-before': null
  },
}
