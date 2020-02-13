// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' },
        { path: '/:id/recharge', component: '../pages/recharge' },
        { path: '/recharge/result', component: '../pages/recharge/result' },
        { path: '/recharge/record', component: '../pages/recharge/record' },
        { path: '/login', component: '../pages/login' },
      ],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: false,
        dva: true,
        dynamicImport: { webpackChunkName: true },
        title: '盎司一起',
        dll: true,

        pwa: {
          manifestOptions: {
            srcPath: './public/manifest.json',
          },
          workboxPluginMode: 'GenerateSW',
          // workboxPluginMode: 'InjectManifest',
          workboxOptions: {
            importWorkboxFrom: 'local',
            // swSrc: 'src/service-worker.js',
            swDest: 'sw.js',
          },
        },

        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
};
