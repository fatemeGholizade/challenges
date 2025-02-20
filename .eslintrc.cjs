module.exports = {
  settings: {
    react: {
      version: "detect",
    },

    "import/resolver": {
      typescript: {},
    },
  },

  env: { browser: true, node: true, es2020: true },

  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],

  parser: "@typescript-eslint/parser",

  parserOptions: { ecmaVersion: "latest", sourceType: "module" },

  plugins: ["react-refresh", "import", "simple-import-sort", "unused-imports"],

  overrides: [
    {
      files: ["./src/services/rest/index.ts"],
      rules: {
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
  ],

  rules: {
    "no-console": "warn",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": "error",

    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react-refresh/only-export-components": "warn",
    "import/no-unresolved": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "unused-imports/no-unused-imports": "error",

    "prettier/prettier": [
      "error",
      {},
      {
        usePrettierrc: true,
      },
    ],

    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
        prefix: ["I"],
      },

      {
        selector: "typeAlias",
        format: ["PascalCase"],
        prefix: ["T"],
      },

      {
        selector: "enum",
        format: ["PascalCase"],
        prefix: ["E"],
      },
    ],
  },
};
