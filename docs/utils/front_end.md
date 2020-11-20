# 注意事项

<br/>

## H5/小程序部署前

<br/>

**1. 修改项目名称※（如果是H5，请务必修改准确）**

> 前往`mainifest.json`，选择`h5配置`,修改页面标题

<br/>

**2. 修改appid※（如果用到appid，请务必修改准确）**

> 前往`mainifest.json`，选择`微信小程序配置`，修改微信小程序`AppID`

> 前往`/global/js/baseUrl.js`，修改小程序的`appid`
 
<br/>

**3. 修改项目接口访问地址※**

> 前往`/global/js/baseUrl.js`，将`baseUrl`等相关变量改为对应的线上地址

<br/>


<br/>

## 管理端部署前

<br/>

**1. 去除多余菜单※**

> 前往菜单管理，将不必要的菜单项设置为隐藏

<br/>

**2. 去除页面右上方多余`icon`※**

方法1：
> 前往`/views/Layout/components/icon_box/index.vue`，将多余的`icon`注释

方法2：
> 前往`/global/js/config.js`将对应字段设置为`false`即可隐藏

<br/>

**3. 去除点击右上角头像展开多余的下拉菜单项※**

> 前往`/views/Layout/components/drop_down/index.vue`，将多余的菜单项注释

<br/>

**4. 修改项目接口访问地址※**

> 前往`/public/assets/js/baseUrl.js`，将`baseUrl`等相关变量值修改为对应的线上地址

<br/>

**5. 修改项目名称与图标※**

> 前往`/public/index.html`

修改项目名称示例代码：
```html
<!-- 修改前的写法 -->
<title>xz-admin</title>

<!-- 修改后的写法 -->
<title>xxxx项目</title>
```

修改项目图标示例代码：
```html
<!-- 修改前的写法 -->
<link rel="icon" href="<%= BASE_URL %>assets/images/xz.png">

<!-- 修改后的写法 -->
<link rel="icon" href="<%= BASE_URL %>assets/images/项目图标.png">
```

<br/>

**6. 删除页脚※**

方法1：
> 前往`/views/Layout/index.vue`，注释掉页脚

示例代码：
```html
<!-- 注释掉这段代码即可 -->
<el-footer class="footer" height="30px" v-show="showFooter">
	<div class="coppy-right">
		<span>© 2020 xuanzai Whale cloud network.All rights reserved - 粤ICP备19008964号-2</span>
	</div>
</el-footer>
```

方法2：
> 前往`/global/js/config.js`将对应字段设置为`false`即可隐藏

<br/>

**7. 设置菜单栏上方的`logo`（如果项目无替换`logo`需求，可采用本地图片代替）**

方法1：
> 点击右上角头像 -> 选择系统设置 -> 选择系统图标 -> 选择logo -> 上传logo

方法2：
> 前往`/views/Layout/index.vue`，将所有`logoUrl`变量换成本地图片（一共三处）

方法2示例代码：
```html
<!-- 修改前的写法 -->
<el-image
	:src="logoUrl"
	fit="cover"
	class="logo-verticle"
	v-show="showLogo"
	v-if="!isCollapse"
	@click.native="$router.push({ path: '/home/welcome' })"
>
	<div slot="error" class="image-slot">
		<i class="el-icon-picture-outline"></i>
	</div>
</el-image>

<!-- 修改后的写法 -->
<el-image
	:src="require('@/assets/images/xxx.png')"
	fit="cover"
	class="logo-verticle"
	v-show="showLogo"
	v-if="!isCollapse"
	@click.native="$router.push({ path: '/home/welcome' })"
>
	<div slot="error" class="image-slot">
		<i class="el-icon-picture-outline"></i>
	</div>
</el-image>
```

<br/>

**8. 设置右上角头像图片（如果项目无个人中心需求，可使用本地图片代替）**

方法1：
> 点击右上角头像 -> 选择个人中心 -> 上传头像即可

方法2：
> 前往`/views/Layout/components/drop_down/index.vue`，将`squareUrl`变量换成本地图片

方法2示例代码：
```html
<!-- 修改前的写法 -->
<el-avatar shape="square" :size="45" :src="squareUrl">
  <img src="https://myinterface.xuanzai.top/getPicture?type=error" />
</el-avatar>

<!-- 修改后的写法 -->
<el-avatar shape="square" :size="45" :src="require('@/static/assets/xxx.png')">
  <img src="https://myinterface.xuanzai.top/getPicture?type=error" />
</el-avatar>
```

<br/>

**9. 修改项目打包路径（一般情况下无需修改项目打包路径）**

> 前往根目录，找到`public_path.js`

示例代码：
```js
// 修改前
module.exports = {
  environment: process.env.NODE_ENV === 'production' ? '/' : '/',
  editor: process.env.NODE_ENV === 'production' ? '/' : '/',
}

// 修改后
module.exports = {
  environment: process.env.NODE_ENV === 'production' ? '/admin' : '/',
  editor: process.env.NODE_ENV === 'production' ? '/admin' : '/',
}
```

<br/>

（如果用到富文本，请继续往下看）

> 修改完部署路径后，继续前往`/public/assets/js/tinymce/plugins/axupimgs/plugin.js`

示例代码：
```js
// 第六行代码
var iframe1 = baseURL+'/plugins/axupimgs/upfiles.html';

// 修改为
var iframe1 = baseURL+'/admin/plugins/axupimgs/upfiles.html';
```

> 继续前往`/public/assets/js/tinymce/plugins/axupimgs/plugin.min.js`

示例代码：
```js
// 第六行代码
var iframe1 = '/assets/js/tinymce/plugins/axupimgs/upfiles.html';

// 修改为
var iframe1 = '/admin/assets/js/tinymce/plugins/axupimgs/upfiles.html';
```

部署有问题，直接联系部署专员进行处理

