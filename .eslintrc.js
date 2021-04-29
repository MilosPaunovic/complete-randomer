module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    mocha: true,
  },
  extends: ['airbnb-base'],
  parserOptions: { ecmaVersion: 12 },
  overrides: [{ files: 'test/*.js' }],
  rules: {
    'func-names': 'off',
    'prefer-rest-params': 'off',
    'valid-typeof': 'off',
  },
};
