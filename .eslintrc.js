module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: ['react', 'jsx-a11y', 'import'],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
    serviceworker: true,
  },
  rules: {
    'linebreak-style': ['error', require('os').EOL === '\r\n' ? 'windows' : 'unix'],
  },
};
