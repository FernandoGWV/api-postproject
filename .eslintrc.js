module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: "airbnb-base",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "class-methods-use-this": "off",
    quotes: "off",
    "import/first": "off",
    "import/no-extraneous-dependencies": "off",
    "no-param-reassign": "off",
    "comma-dangle": "off",
    "import/no-unresolved": "off",
    camelcase: "off",
  },
};
