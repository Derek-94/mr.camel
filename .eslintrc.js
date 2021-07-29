module.exports = {
  extends: ['react-app', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
