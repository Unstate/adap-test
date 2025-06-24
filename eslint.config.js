import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import stylistic from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import { defineConfig } from "eslint/config";


export default defineConfig([
    { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
    { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        plugins: {
            "react": pluginReact
        },
        rules: {
            "react/jsx-uses-react": "off",
            "react/react-in-jsx-scope": "off",
        }
    },
    {
        plugins: {
            '@stylistic': stylistic,
        },
        rules: {
            '@stylistic/indent': ['error', 4],
            '@stylistic/semi': ['error', 'always'],
            '@stylistic/jsx-quotes': 'warn',
            '@stylistic/no-trailing-spaces' : ['error'],
            '@stylistic/eol-last' : 'error',
            '@stylistic/max-len' : [2, 150, {
                ignoreUrls : true,
                ignoreTrailingComments : true,
                ignoreRegExpLiterals : true,
            },
            ],
        },
    },
    {
        files: ['**/*.{ts,tsx}'],
        extends: [importPlugin.flatConfigs.recommended, importPlugin.flatConfigs.typescript],
        rules: {
            "import/order": ["error", {
                "groups": [
                    "builtin",
                    ["sibling", "parent"],
                    "index",
                    "object",
                ],
            }],
        }
    }
]);
