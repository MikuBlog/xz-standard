# 代码层

<br/>

## 开发规范

1. 以脚手架的架构为准

【uniapp】	
> 源码：[https://github.com/MikuBlog/uni-app-resp](https://github.com/MikuBlog/uni-app-resp)
> 
> 文档：[http://xzuni-docs.xuanzai.top](http://xzuni-docs.xuanzai.top)

【pc管理端】	
> 源码：[https://github.com/MikuBlog/xz-admin](https://github.com/MikuBlog/xz-admin)
> 
> 文档：[http://xzadmin-docs.xuanzai.top](http://xzadmin-docs.xuanzai.top)

<br/>

2. 代码看情况拆分
	- 代码量少（即一页代码不超300行）可以无需拆分
	- 多于300行，请按脚手架架构进行代码拆分

<br/>

3. 自行封装`api/工具函数/组件`

请按项目架构将相应文件放置相应目录，具体操作参考文档

<br/>

## 代码规范

1. 避免高内聚，请在编写代码的过程中将业务代码细分至各函数中

示例：
```js
export default {
	method: {
		// 计算价格
		caculator() {
			// todo
		},
		// 加入购物车
		addToCart() {
			
		},
		// 清空购物车
		clearCart() {
			
		}
		// ...
	}
}
```

<br/>

2. 避免在标签内写函数或表达式

示例：
```html
<!-- 不推荐 -->
<image @click="e => { // todo }" />

<!-- 不推荐 -->
<view v-for="(item, ind) in list.filter(val => val.onShow)"></view>

<!-- 推荐 -->
<image @click="handlerClick" />

<!-- 推荐 -->
<view v-for="(item, ind) in list"></view>
```

<br/>

3. 避免数组循环时用`index`值作为`key`值，可能会引起渲染上的错误，建议使用id或其他唯一字符代替

示例：
```html
<!-- 不推荐 -->
<view v-for="(item, ind) in list" :key="ind"></view>

<!-- 推荐 -->
<view v-for="(item, ind) in list" :key="item.id"></view>
```

> 这种写法容易导致`Vue`算法判断错误

<br/>

4. 避免使用`:style`响应样式，建议使用`:class`，提高代码整洁度

示例：
```html
<!-- 不推荐 -->
<view :style="{
	color: isRed ? 'red' : 'white'
}"></view>

<!-- 推荐 -->
<view :class="{
	'red-text': isRed
}"></view>
```

<br/>

5. 双层标签循环时避免使用相同的变量

示例：
```html
<!-- 不推荐 -->
<view v-for="(item, ind) in list" :key="item.id">
	<view v-for="(item, ind) in list" :key="item.id"></view>
</view>

<!-- 推荐 -->
<view v-for="(parentItem, parentInd) in parentList" :key="parentItem.id">
	<view v-for="(childItem, childInd) in parentItem.children" :key="childItem.id"></view>
</view>
```

> 使用不推荐写法导致小程序编译错误

<br/>

6. 避免直接使用赋值后的对象数据，应先在data中定义该对象及其变量

示例：
```js
// 不推荐
export default {
	data() {
		detail: {}
	},
	method: {
		initData() {
			this.detail.name = "旋仔"
		}
	}
}

// 推荐 
export default {
	data() {
		detail: {
			name: "",
			age: ""
		}
	},
	method: {
		initData() {
			this.detail.name = "旋仔"
		}
	}
}
```

> 使用不推荐写法导致小程序渲染显示`undefined`

<br/>

7. 避免使用匿名函数，尽量使用箭头函数

示例：
```js
// 不推荐
export default {
	method: {
		toDo: function() {
			// todo
		}
	}
}

// 推荐
export default {
	method: {
		toDo() {
			// todo
		},
		toDo_2: () => {
			// todo
		}
	}
}
```

<br/>

8. 避免直接填写完整的图片路径，应使用全局路径代替前缀

示例：

```js
// 定义全局可访问路径
Vue.prototype.cdnUrl = "http://xxx.com"
```

```html
<!-- 不推荐 --> 
<image src="http://xxx.com/xxx.png">

<!-- 推荐 --> 
<image :src="`${cdnUrl}/xxx.png`">
```

> 当图片迁移到别的服务器时，可以有效避免大规模的图片路径更改

<br/>

9. 避免图片路径中文命名

示例：
```html
<!-- 不推荐 --> 
<image src="http://xxx.com/旋仔.png">

<!-- 推荐 --> 
<image :src="`${cdnUrl}/xuanzai.png`">
```

> 当以中文命名时，`ios`设备渲染图片失败