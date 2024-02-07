module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-scss', 'stylelint-prettier'],
  defaultSeverity: 'warning',
  rules: {
    'at-rule-no-unknown': null,
    'string-quotes': 'double',
    'prettier/prettier': true,
    'scss/at-rule-no-unknown': true,
  },
};
