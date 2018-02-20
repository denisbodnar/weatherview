module.exports = {
  parser: "babel-eslint",
  extends: "airbnb",
  plugins: ["babel", "react"],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    "react/prop-types": 0,
    "no-mixed-operators": 0,
    "no-console": 0,
  }
};