module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-lonely-if': 0,
    'linebreak-style': 0,
    'react/jsx-filename-extension': 0,
    'react/require-default-props': 0,
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    'react/forbid-prop-types': 0,
    'no-underscore-dangle': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/no-array-index-key': 0,
    'react/jsx-one-expression-per-line': 0,
    'no-nested-ternary': 0,
    'no-unused-expressions': 0,
    'prefer-destructuring': 0,
    'no-unused-vars': 0,
  },
};