module.exports = {
  parser: "babel-eslint",  
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: 'airbnb',
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
  plugins: [
    'react',
  ],
  rules: {
    semi: [2, 'never'],
    "react/prop-types": 0,
    "react/jsx-filename-extension": 0,
    "implicit-arrow-linebreak": 0,
    "no-confusing-arrow": 0,
    "no-nested-ternary": 0,
    "import/prefer-default-export": 0,
    "react/destructuring-assignment": 0,
    "react/no-array-index-key": 0,
    "no-return-assign": 0,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src']
      }
    }
  }
};
