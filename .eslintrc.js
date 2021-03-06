module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'node': true,
    'mocha': true,
    'cypress/globals': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true
    },
    'sourceType': 'module',
    'ecmaVersion': 2017
  },
  'plugins': [
    'react',
    'cypress'
  ],
  'rules': {
    'no-console': 0,
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'react/jsx-uses-vars': [2],
    'no-trailing-spaces': [
      'error'
    ],
    'key-spacing': ['error', {
      'singleLine': {
        'beforeColon': true,
        'afterColon': true
      },
      'multiLine': {
        'beforeColon': true,
        'afterColon': true,
        'align': 'colon'
      }
    }],
  }
};
