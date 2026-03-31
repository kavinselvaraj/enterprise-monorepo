const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "next/core-web-vitals",
        "next/typescript",
    ],
    settings: {
        "import/resolver": {
            typescript: { project },
        },
    },
    rules: {
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
        "no-console": ["warn", { allow: ["warn", "error"] }],
        "react/display-name": "off",
        "@typescript-eslint/no-empty-object-type": "off",
    },
};
