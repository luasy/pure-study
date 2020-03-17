module.exports = {
  env: {
    node: true,
    browser: true,
    es6: false
  },
  extends: ['lope'],
  rules: {
    'no-extend-native': 0,
    'no-bitwise': 0,
    'vars-on-top': 0,
    'no-var': 0,
    'prefer-rest-params': 0,
    'prefer-destructuring': 0,
    'no-plusplus': 0,
    'no-void': 0,
  }
}