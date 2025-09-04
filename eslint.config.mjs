import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import prettierPlugin from "eslint-plugin-prettier";
import unusedImports from "eslint-plugin-unused-imports";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts"],
  },
  {
    plugins: {
      prettier: prettierPlugin,
      "unused-imports": unusedImports,
    },
    rules: {
      "prettier/prettier": "error",
      "unused-imports/no-unused-imports": "warn",
      "react/react-in-jsx-scope": "off",
    },
  },
];

export default eslintConfig;
