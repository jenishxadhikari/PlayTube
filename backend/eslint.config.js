import pluginJs from "@eslint/js"
import prettierConfig from "eslint-config-prettier"
import globals from "globals"

export default [
  {
    languageOptions: {
      globals: globals.node,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "no-console": "off",
      eqeqeq: "error",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
  pluginJs.configs.recommended, // ESLint recommended rules
  prettierConfig, // Disables conflicting ESLint rules with Prettier
]
