module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb-base',
    'prettier',
  ],
  rules: {
    'no-console': 'off',
    "comma-dangle": 0,
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 120,
      }
    ],
  },
  "plugins": [
    "prettier",
  ]
};
