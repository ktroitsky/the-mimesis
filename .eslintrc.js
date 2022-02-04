module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [`react-app`, "plugin:react/recommended"],
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ["react"],

  rules: {
    "no-catch-shadow": 0,
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 1,
  },
}
