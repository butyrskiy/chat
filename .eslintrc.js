module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    eqeqeq: ['error', 'always'],
    'no-var': 'error',
    'max-len': ['error', { code: 135 }],
    'import/prefer-default-export': 'off',
    // '@typescript-eslint/indent': ['error', 2],
  },
};
