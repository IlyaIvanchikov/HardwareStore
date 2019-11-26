module.exports = {
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
    },
    "parser": "babel-eslint",
    "extends": ["airbnb"],
    "rules": {
        "max-len": [1, 120, 2, {ignoreComments: true}],
        "linebreak-style": 0
    },
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jquery": true
      },
};