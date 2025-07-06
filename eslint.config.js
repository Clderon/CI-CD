import eslintPluginNode from "eslint-plugin-node";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.js"],
    plugins: {
      node: eslintPluginNode,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      semi: ["error", "always"],
      "no-unused-vars": "warn",
      "prefer-promise-reject-errors": "warn",
      "max-len": ["warn", { code: 100 }],
      "brace-style": ["warn", "1tbs"],
      camelcase: "warn",
      "new-cap": "warn",
    },
  },
];
