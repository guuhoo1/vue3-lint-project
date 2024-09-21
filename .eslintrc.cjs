/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/eslint-config-prettier/skip-formatting",
  ],

  rules: {
    "vue/no-undef-components": "error",
    "vue/no-undef-properties": "error",
    "vue/eqeqeq": "warn",
    "vue/no-unused-properties": "error",
    "vue/no-unused-emit-declarations": "error",
    "array-callback-return": "error",
    eqeqeq: "warn",
  },

  parserOptions: {
    ecmaVersion: "latest",
  },
};