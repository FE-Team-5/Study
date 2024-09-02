export default {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended", // Prettier와 통합
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE"],
      },
      {
        selector: "function",
        format: ["camelCase"],
      },
      {
        selector: "interface",
        format: ["PascalCase"],
      },
      {
        selector: "typeAlias",
        format: ["PascalCase"],
      },
      {
        selector: "enum",
        format: ["PascalCase"],
      },
      {
        selector: "typeParameter",
        format: ["PascalCase"],
      },
    ],
  },
};
