# 快速开始

## 安装编译器

如果想体验`uniapp`极致的开发体验，请务必下载`HbuilderX`编译器进行开发！！！

下面的一切步骤都将基于`HbuilderX`执行~

[点击此处前往下载编译器](https://www.dcloud.io/hbuilderx.html)

## 运行项目

新建一个文件夹，在该目录下直接使用如下命令
```
git clone https://github.com/MikuBlog/uni-app-resp.git
```

进入到下载好的项目目录下，使用如下命令进行依赖安装
```
npm install
```

打开`HbuilderX`

+ 选择左上角菜单`运行`
+ 选择对应的项运行项目（如果提示需要安装xxx插件，点击确认安装，最后重新运行项目即可）

#### 温馨提示

如果嫌弃`npm`安装速度过慢，可以切换到淘宝镜像再使用`cnpm`进行安装

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

然后再执行

```
cnpm install
```

## 目录结构

```
├─api
├─components // 存放常用组件
│  ├─lvv-popup
│  ├─uni-badge
│  ├─uni-card
│  ├─uni-icons
│  ├─uni-list
│  ├─uni-list-item
│  ├─uni-load-more
│  ├─uni-popup
│  ├─uni-rate
│  ├─uni-search-bar
│  └─uni-transition
├─global
│  ├─css
│  └─js
├─initial
├─js_sdk
│  ├─gangdiedao-uni-axios
│  └─jsencrypt
├─node_modules // 打包模块
├─pages // 页面文件
│  ├─h5_login
│  ├─index
│  │  ├─js
│  │  └─scss
│  ├─redirect
│  └─wx_login
├─static // 静态资源模块
│  └─images
├─store // vuex核心模块
│  └─modules
├─unpackage // 编译运行的文件
└─utils
```

## 页面模块结构

为了方便后期的开发与维护，本后台管理系统模板对每个页面模块拆分成如下结构：

```
│  ├─home // 页面模块名称
│  │  └─scss // 页面样式
│  │  │  └─index.scss
│  │  └─js // 业务逻辑模块
│  │  │  └─operation.js // 页面逻辑文件
│  │  │  └─property.js // 响应式属性管理文件
│  │  ├─index.vue // 页面
```

当然，怎么开发舒爽怎么来也是没问题的~~~
