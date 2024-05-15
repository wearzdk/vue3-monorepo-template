import antfu from '@antfu/eslint-config';

export default antfu({
  stylistic: {
    indent: 2,
    quotes: 'single',
    semi: true, // 启用分号
  },
  vue: true,
  // unocss: true,
});
