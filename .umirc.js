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
				{ path: '/eth', component: '../pages/eth' },
				{ path: '/login', component: '../pages/login' },
				{ path: '/receive', component: '../pages/receive' },
				{ path: '/outputed', component: '../pages/outputed' },
				{ path: '/pay', component: '../pages/pay' },
				{ path: '/payment', component: '../pages/payment' }
			]
		}
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
						srcPath: './public/manifest.json'
					},
					workboxPluginMode: 'GenerateSW',
					// workboxPluginMode: 'InjectManifest',
					workboxOptions: {
						importWorkboxFrom: 'local',
						// swSrc: 'src/service-worker.js',
						swDest: 'sw.js'
					}
				},

				routes: {
					exclude: [ /models\//, /services\//, /model\.(t|j)sx?$/, /service\.(t|j)sx?$/, /components\// ]
				}
			}
		]
	],
	proxy: {
		'/api': {
			target: 'http://aliyun.eagle711.win:8082',
			changeOrigin: true,
			secure: false,
			pathRewrite: { '^/api': '' }
		}
	}
};
