module.exports = {
	plugins: ['@vuepress/back-to-top', '@vuepress/nprogress'],
  title: '鲸云网络',
	description: '代码千万条，规范第一条。编写不规范，猝死立刻犯!',
	head: [
		['link', { rel: 'icon', href: '/logo/company.png' }]
	],
	themeConfig: {
		sidebarDepth: 3,
		smoothScroll: true,
		nav: [
		  { text: '业务层', link: '/guide/develope/quick_start' },
		  { text: '代码层', link: '/api/front_end' }
			// { text: 'Utils', link: '/utils/front_end' },
			// { text: '部署', link: '/online/front_end' },
			// { text: '日志', link: '/update/' },
		 //  { text: '友情链接', 
			// 	items: [
			// 		{ text: '项目地址', link: "https://github.com/MikuBlog/uni-app-resp" },
			// 		{ text: 'xz-admin-docs', link: "http://xzadmin-docs.xuanzai.top" },
			// 		{ text: 'xz-admin', link: "https://github.com/MikuBlog/xz-admin" }
			// 	]
			// }
		],
		sidebar: {
			'/guide/': [{
				title: "业务层",
				collapsable: false,
				children: [
					'develope/quick_start'
				]
			}],
			'/api/': [{
				title: "代码层",
				collapsable: false,
				children: [
					'front_end'
				]
			}]
		}
	}
}