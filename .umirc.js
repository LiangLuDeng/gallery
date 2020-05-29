import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  antd: {
    dark: true, // 开启暗色主题
    // compact: true, // 开启紧凑主题
  },
});
