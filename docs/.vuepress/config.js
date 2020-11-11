module.exports = {
	plugins: ['@vuepress/back-to-top', '@vuepress/nprogress'],
  title: 'xz-uni-docs',
	description: '让一切复杂的应用程序都从简单的开发开始!',
	head: [
		['link', { rel: 'icon', href: '/logo/xz.png' }]
	],
	themeConfig: {
		sidebarDepth: 3,
		smoothScroll: true,
		nav: [
		  { text: '指南', link: '/guide/develope/quick_start' },
		  { text: 'API', link: '/api/front_end' },
			{ text: 'Utils', link: '/utils/front_end' },
			{ text: '部署', link: '/online/front_end' },
			{ text: '日志', link: '/update/' },
		  { text: '友情链接', 
				items: [
					{ text: '项目地址', link: "https://github.com/MikuBlog/uni-app-resp" },
					{ text: 'xz-admin-docs', link: "http://xzadmin-docs.xuanzai.top" },
					{ text: 'xz-admin', link: "https://github.com/MikuBlog/xz-admin" }
				]
			}
		],
		sidebar: {
			'/guide/': [{
				title: "指南",
				collapsable: false,
				children: [
					'develope/quick_start',
					'develope/front_end'
				]
			}],
			'/api/': [{
				title: "API",
				collapsable: false,
				children: [
					'front_end'
				]
			}],
			'/utils/': [{
				title: "Utils",
				collapsable: false,
				children: [
					'front_end'
				]
			}],
			'/online/': [{
				title: "部署",
				collapsable: false,
				children: [
					'front_end'
				]
			}]
		}
	}
}