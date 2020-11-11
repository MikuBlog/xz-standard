# 前端手册

## 文档

> [点击查看uniapp文档](https://uniapp.dcloud.io/)

<br/>

## 全局配置

在`global/js/config.js`文件下，有全局统一配置信息。操作这些信息方便改后打包使用。

这些属性时暂时的，往后会推出更多可配置项~

```js
// 布尔类型的值改为false则表示不允许设置
export default {
	// 是否默认H5微信登录
	isH5WxLogin: false
}
```

<br/>

## 修改请求地址

请求地址在`global/js/baseUrl.js` 文件内，只需修改这串代码即可。

```
baseUrl = 'http://openlan.missiono.cn'	
```
