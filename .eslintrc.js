module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    '@webpack-contrib/eslint-config-webpack',
    'plugin:jsx-a11y/recommended'

  ],
  settings: {
    ignore: 'node_modules',
    root: true
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 6
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import'
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-console': 'off',
    'class-methods-use-this': 'off'
  }
}
