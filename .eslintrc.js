module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    eqeqeq: ['error', 'always'],
    'no-var': 'error',
    'max-len': ['error', { code: 120 }],
    'import/prefer-default-export': 'off',
  },
};
