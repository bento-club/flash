/* eslint-env node */

module.exports = {
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
    },
    extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "prettier"],
    rules: {
        "vue/require-default-prop": "off",
    },
};
