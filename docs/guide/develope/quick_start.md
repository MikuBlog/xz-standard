# 业务层

<br/>

## 样式规范

**1. 以原型为准**
	- 页面的开发以原型为准
	- 一旦有疑问或原型有明显错误，咨询负责该项目的产品经理及`UI`进一步确认

提出者：旋仔
<br/>
纳入者：旋仔
<br/>
审核者：旋仔

<br/>

**2. 单位的使用**

示例：
```css
/* 不推荐 */
.header {
	line-height: 50px;
}

/* 推荐 */
.header {
	line-height: 100rpx;
}
```

提出者：旋仔
<br/>
纳入者：旋仔
<br/>
审核者：旋仔

<br/>

**3. 布局尽量采用`flex`布局**

示例：
```css
.flex-box {
	display: flex;
}
```

> 如果布局相对复杂，那么可以使用`relative/absolute`进行定位

提出者：旋仔
<br/>
纳入者：旋仔
<br/>
审核者：旋仔

<br/>

**4. 管理端表格文字隐藏后，鼠标浮动上去默认冒泡显示**

示例：
```html
<!-- 使用show-overflow-tooltip属性 -->
<el-table-column show-overflow-tooltip />
```

> 如果布局相对复杂，那么可以使用`relative/absolute`进行定位

提出者：旋仔
<br/>
纳入者：旋仔
<br/>
审核者：旋仔

<br/>

## 请求规范

**1. `Loading`的使用**

非特殊情况，所有涉及**增/删/改**操作务必带上`Loading`(请求库已封装)

示例：
```js
// 自带loading
this.$http_json({
	// todo
})

// 取消loading
this.$http_json({
	loading: false,
	// todo
})
```

提出者：旋仔
<br/>
纳入者：旋仔
<br/>
审核者：旋仔

<br/>

**2. 请求成功后提示**
	- 非特殊情况，所有涉及**增/删/改**操作成功或失败都需作提示
	- 提示成功后一秒执行回调业务操作，既能提示用户又无需用户等待太长的反应时间

示例：
```js
this.$http_json({
	// todo
}).then(result => {
	this.$showToast({
		title: "xxx"
	})
	setTimeout(_ => {
		// 提示1秒后执行相应的业务逻辑
	}, 1000)
})
```

提出者：旋仔
<br/>
纳入者：旋仔
<br/>
审核者：旋仔

<br/>

**3. 敏感操作先弹窗提示**

涉及**修改/删除**的请求时，先使用`Modal`弹窗提示，点击“确认”按钮后再执行下一步操作

示例：
```js
// 删除接口
this.$showModal({
	title: "删除xxx",
	content: "确认删除xxx吗？",
	success: e => {
		if(e.confirm) {
			this.$http_json({
				// todo
			}).then(result => {
				// todo
			})
		}
	}
})
```

提出者：旋仔
<br/>
纳入者：旋仔
<br/>
审核者：旋仔

<br/>

## 对接规范

基于axios的`GET`与`POST`请求

区别 | GET | POST
- | - | -
传参方式 | 请求`url`后拼接 / `params`内传参 | 仅能在`data`内传参
传参长度 | `url`一般为2048个字符长度上限 | 无


<br/>

### GET请求规范

<br/>

**1. 查询用户/博文/...列表**

> tips：非特殊情况，所有列表默认以创建日期倒序排序

示例接口：
```
接口文档

GET: /api/user/page

参数名称：

page(页码数，从第零页开始计算)

size(每页条数)

nickname(额外参数，用于筛选列表)

sort(排序 desc倒序 asc正序)
```

推荐写法示例：
```js
// 方式1：通过params传参的形式
this.$http_json({
	url: '/api/user/page',
	method: "get",
	params: {
		page: this.nowPage, 
		size: this.nowSize,
		sort: 'createdAt,desc', // 按照创建日期倒序
		nickname: this.nickname // 用昵称去筛选用户列表
	}
}).then(result => {
	this.list = result.data.content
})

// 方式2：通过模板字符串拼接参数的形式
this.$http_json({
	url: `/api/user/page?page=${
		this.nowPage
	}&size=${
		this.nowSize
	}&nickname=${
		this.nickname
	}&sort=createdAt,desc`,
	method: 'get'
}).then(result => {
	this.list = result.data.content
})
```

请求写法 | 优点 | 缺点
- | - | -
方式1 | 写法易懂，快速上手 | 无法拼接多个相同的参数
方式2 | 可以拼接多个相同的参数 | 写法相对复杂

提出者：旋仔
<br/>
纳入者：旋仔
<br/>
审核者：旋仔

<br/>

**2. 查询用户/博文/...详情**

示例接口：
```
接口文档

GET: /api/user/get/{id}

参数名称：

id(用户/博文/...的ID)
```

推荐写法示例：
```js
// 使用模板字符串的写法
this.$http_json({
	url: `/api/user/get/${this.id}`,
	method: 'get'
}).then(result => {
	this.userDetail = result.data
})
```

提出者：旋仔
<br/>
纳入者：旋仔
<br/>
审核者：旋仔

<br/>

### POST请求规范

<br/>

**1. 修改用户/博文/...信息**

示例接口：
```
接口文档

GET: /api/information/edit

参数名称：

id(用户/博文/...的ID)

recommendBackgroundImage(待传参数)

sharePoolAmount(待传参数)
```

推荐写法示例：
```js
// 使用模板字符串的写法
this.$http_json({
	url: `/api/information/edit`,
	method: 'post',
	data: {
		id: this.id, // 修改项的id
		recommendBackgroundImage: this.recommendBackgroundImage,
		sharePoolAmount: this.sharePoolAmount
	}
}).then(result => {
	// 管理端成功提示
	this.$successMsg('修改成功')
	// 用户端成功提示
	this.$showToast({
		title: "修改成功"
	})
	// 重新请求列表/详情接口，刷新列表/详情
})
```

提出者：旋仔
<br/>
纳入者：旋仔
<br/>
审核者：旋仔

<br/>

**2. 批量删除用户/博文/...**

示例接口：
```
接口文档

GET: /api/user/del

参数名称：

ids(由删除项组成的id数组)
```

推荐写法示例：
```js
// 使用模板字符串的写法
this.$http_json({
	url: `/api/information/edit`,
	method: 'post',
	data: [ id1, id2, id3 ]
}).then(result => {
	// 管理端成功提示
	this.$successMsg('批量删除成功')
	// 用户端成功提示
	this.$showToast({
		title: "批量删除成功"
	})
	// 重新请求列表/详情接口，刷新列表/详情
})
```

提出者：旋仔
<br/>
纳入者：旋仔
<br/>
审核者：旋仔

<br/>

**3. 上传文件/头像...**

> tips: 上传图片避免过大，尽量限制在4M以内，具体限制大小传参参考开发文档

示例接口：
```
接口文档

GET: /api/localStorage/upload

参数名称：

file(文件数据)

name(文件名称)
```

推荐写法示例：
```js
this.$http_file({
	url: `/api/localStorage/upload`,
	method: 'post',
	data: {
		file: this.file, // 文件数据
		name: new Date().getTime() // 示例简单以时间戳命名，实际按开发所需
	}
}).then(result => {
	// 管理端成功提示
	this.$successMsg('上传成功')
	// 用户端成功提示
	this.$showToast({
		title: "上传成功"
	})
	// 重新请求列表/详情接口，刷新列表/详情
})
```

上传接口一般配合`this.$getFile`去使用

1. [移动端脚手`getFile`使用方式](http://xzuni-docs.xuanzai.top/api/front_end.html#getfile)
2. [管理端脚手`getFile`使用方式](http://xzadmin-docs.xuanzai.top/api/front_end.html#getfile)

> tips: 管理端、用户端有很多现成的请求示例，可以参考以往项目的请求示例直接复制粘贴使用，避免项目开发的过程中踩过多的坑

提出者：旋仔
<br/>
纳入者：旋仔
<br/>
审核者：旋仔


