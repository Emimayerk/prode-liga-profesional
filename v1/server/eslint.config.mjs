import { FlatCompat } from '@eslint/eslintrc'
import pluginJs from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const custom = new FlatCompat()

export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...custom.extends(
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ),
  {
    files: ['**/*.js', '**/*.jsx'],
    plugins: {
      prettier: 'eslint-plugin-prettier'
    },
    rules: {
      'prettier/prettier': 'error',
      'import/extensions': [
        'error',
        'ignorePackages',
        { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' }
      ]
    }
  }
]
