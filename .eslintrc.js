module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint', 
  ],
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    // 'import/no-extraneous-dependencies': ['error', { packageDir: './src' }],
    "no-underscore-dangle": "off"
  },
};
