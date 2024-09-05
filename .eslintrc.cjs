/* eslint-env node */

require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
    root: true,
    extends: [
        "plugin:vue/vue3-recommended",
        "eslint:recommended",
        "@vue/eslint-config-typescript",
        "@vue/eslint-config-prettier/skip-formatting",
    ],
    rules: {
        "vue/require-default-prop": "off",
        "vue/multi-word-component-names": "off",
    },
    parserOptions: {
        ecmaVersion: "latest",
    },
}
