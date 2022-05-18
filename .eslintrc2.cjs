module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'standard',
    'plugin:@typescript-eslint/recommended',
    './.eslintrc-auto-import.json'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      tsx: true,
      jsx: true,
    },
  },
  globals: {
    __dirname: false,
    defineEmits: false,
    defineProps: false,
    $message: false,
  },
  // plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/multi-word-component-names': 0,
    'space-before-function-paren': ['error', 'always'],
    'comma-dangle': [
      'error',
      {
        objects: 'always',
      }
    ],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
  },
};
