import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['**/dist', '**/eslint.config.js'],
  },
  ...fixupConfigRules(
    compat.extends(
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'plugin:prettier/recommended',
    ),
  ),
  {
    plugins: {
      'react-refresh': reactRefresh,
      prettier: fixupPluginRules(prettier),
      import: importPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
        },
      ],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      indent: ['error', 2],
      'no-multi-spaces': ['error'],
      'prettier/prettier': 'warn',
      'func-style': [
        'error',
        'expression',
        {
          allowArrowFunctions: true,
        },
      ],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal'],
          pathGroups: [
            {
              pattern: '{react,react-dom/**}',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '../../**/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '../**/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: './**/**',
              group: 'internal',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      '@typescript-eslint/array-type': [
        'error',
        {
          default: 'generic',
          readonly: 'generic',
        },
      ],
    },
    settings: {
      'import/parser': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
    },
  },
];
