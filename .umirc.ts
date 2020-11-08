import { defineConfig } from 'umi';

export default defineConfig({
  antd: {
    dark: true,
  },
  routes: [
    {
      path: '/',
      component: '@/layout/index',
      routes: [
        {
          path: '/',
          component: '@/pages/home/index',
        },
        {
          path: '/map',
          component: '@/pages/echartGl/index',
        }
      ],
    },
    
  ],
});
