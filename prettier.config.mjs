import "@trivago/prettier-plugin-sort-imports";
import "prettier-plugin-tailwindcss";

const prettierConfig = {
  plugins: ["@trivago/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],

  printWidth: 90,
  tabWidth: 2,
  arrowParens: "always",
  singleAttributePerLine: true,
  bracketSpacing: true,
  semi: true,
  singleQuote: false,
  jsxSingleQuote: false,
  quoteProps: "as-needed",
  trailingComma: "none",
  htmlWhitespaceSensitivity: "css",
  proseWrap: "always",
  insertPragma: false,
  requirePragma: false,
  useTabs: false,

  importOrder: ["^@/(.*)$", "^[./]", "<THIRD_PARTY_MODULES>"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
};

export default prettierConfig;
