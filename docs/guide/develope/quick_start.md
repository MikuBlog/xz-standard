# 业务层

<br/>

## 样式规范

**1. 以原型为准**
	- 页面的开发以原型为准
	- 一旦有疑问或原型有明显错误，咨询负责该项目的产品经理及`UI`进一步确认

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

<br/>

**3. 布局尽量采用`flex`布局**

示例：
```css
.flex-box {
	display: flex;
}
```

> 如果布局相对复杂，那么可以使用`relative/absolute`进行定位

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