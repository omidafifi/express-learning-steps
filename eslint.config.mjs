import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        ...globals.node,
      },
    },
    rules: {
      // قوانین پیشنهادی برای آموزش Express
      "no-unused-vars": "warn", // اگر متغیری تعریف شد و استفاده نشد، فقط اخطار بده
      "no-undef": "error", // متغیرهای تعریف‌نشده ارور بده
      "no-console": "off", // برای آموزش، console.log آزاد باشد
    },
  },
  {
    ignores: ["node_modules/**", "dist/**", "build/**", "coverage/**"],
  },
];
