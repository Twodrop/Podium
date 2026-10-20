import type { Linter } from 'eslint'
import config from '@lnu/eslint-config'
import { tsRules } from '@lnu/eslint-config/ts'
import prettier from 'eslint-config-prettier'

const eslintConfig: Linter.Config[] = [
  ...config,
  ...tsRules,
  {
    name: 'podium/ts-overrides',
    files: ['**/*.ts'],
    rules: {
      // The base rule flags parameter names in type signatures as unused;
      // @typescript-eslint/no-unused-vars covers TypeScript correctly.
      'no-unused-vars': 'off',

      // TypeScript's own type annotations already enforce these; redundant
      // JSDoc types would just drift out of sync with the real types over time.
      'jsdoc/require-param-type': 'off',
      'jsdoc/require-returns-type': 'off',
    },
  },
  {
    name: 'podium/dts-overrides',
    files: ['**/*.d.ts'],
    rules: {
      // Declaration files only describe types of code documented elsewhere.
      'jsdoc/require-jsdoc': 'off',
    },
  },
  prettier,
]

export default eslintConfig
