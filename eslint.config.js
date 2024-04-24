import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';

// eslint > 9版本时，使用esLint.config.mjs文件配置，< 9时使用eslintrc文件
export default [
  {
    languageOptions: {
      globals: [globals.node, globals.browser, globals.es2021]
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'] // vue3的校验配置
];
