import pluginVue from 'eslint-plugin-vue'
export default [
  // add more generic rulesets here, such as:
  // js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    parser: '@typescript-eslint/parser', // 使用 TypeScript 解析器
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended', // 使用 TypeScript 推荐的规则
    ],
    plugins: ['@typescript-eslint'],
    env: {
      browser: true,
      es6: true,
    },
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    rules: {
      // override/add rules settings here, such as:
      // 'vue/no-unused-vars': 'error'
    }
  }
]