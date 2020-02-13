// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        // 游戏首页
        { path: '/', component: '../pages/index' },
        // 登录
        { path: '/login', component: '../pages/login' },
        // 游戏充值
        { path: '/:id/recharge', component: '../pages/recharge' },
        // 充值记录
        { path: '/recharge/record', component: '../pages/recharge/record' },
        // 充值结果
        { path: '/recharge/result', component: '../pages/recharge/result' },
        // 提现记录
        { path: '/cash/record', component: '../pages/cash/record' },
        // 提现审核
        { path: '/cash/review', component: '../pages/cash/review' },
        // 我的
        { path: '/mine', component: '../pages/mine' },
        // 我的 - 佣金
        { path: '/mine/commission', component: '../pages/mine/commission' },
        // 我的 - 邀请
        { path: '/mine/invite', component: '../pages/mine/invite' },
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
