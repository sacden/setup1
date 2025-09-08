// eslint.config.cjs
const tseslint = require('typescript-eslint');
const js = require('@eslint/js');
const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = [
  {
    ignores: [
      'node_modules/',
      '.next/',
      'out/',
      'build/',
      'next-env.d.ts',
      '*.config.js',
      '*.config.cjs',
    ],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  // Добавляем правила Next.js
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript'],
  }),

  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
];
