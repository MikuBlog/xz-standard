
## 静态资源路径转换

> 为了方便后台的静态资源迁移，于是有了以上这个接口。

> tips: 静态资源的前缀路径可在 global/js/baseUrl.js下修改`prefixUrl`字段值。

```js
// 接口统一请求前缀地址
baseUrl = 'http://localhost:8087',
// 静态资源请求前缀地址
prefixUrl = 'http://localhost:8087'
// 缺省占位图
thumb = "https://myinterface.xuanzai.top/getPicture?type=error"
```

示例:
```js
import { convertHttp } from '@/utils/convertHttp'

// 返回由prefixUrl拼接的网络地址，如果传入为空，则返回缺省占位图
const imageUrl = convertHttp(val.image) // prefixUrl + val.image
```

<br/>

## JavaScript值类型判断

<br/>

示例
```js
import type from '@/utils/type'

type.isNumber(val) // 判断值是否为数字类型
type.isBoolean(val) // 判断值是否为布尔类型
type.isString(val) // 判断值是否为字符串类型
type.isObject(val) // 判断值是否为对象类型
type.isNull(val) // 判断值是否为Null类型
type.isUndefined(val) // 判断值是否为Undefined类型
type.isSymbol(val) // 判断值是否为Symbol类型
type.isArray(val) // 判断值是否为数组类型
type.isDate(val) // 判断值是否为日期类型
```

<br/>

## 验证字符串

<br/>

> tips: 以下写法仅适用于`Element UI`，在需要的页面中导入使用即可。

> 表单验证请参考：[Element UI form组件的用法](https://element.eleme.cn/#/zh-CN/component/form)

<br/>

### 验证手机、电话号码

示例:
```js
import { 
  isPhone, 
  isMobile } 
from '@/utils/validate'

isPhone(str) // true or false
isMobile(str) // true or false
isPhone(str) || isMobile(str) // true or false
```

<br/>

### 验证邮箱

示例:
```js
import { isEmail } from '@/utils/validate'

isEmail(str) // true or false
```

<br/>

### 验证身份证号码

示例:
```js
import { isId } from '@/utils/validate'

isId(str) // true or false
```

<br/>

### 验证网络地址

示例:
```js
import { isURL } from '@/utils/validate'

isURL(str) // true or false
```

<br/>

### 验证小写字母

示例:
```js
import { isLowerCase } from '@/utils/validate'

isLowerCase(str) // true or false
```

<br/>

### 验证大写字母

示例:
```js
import { isUpperCase } from '@/utils/validate'

isUpperCase(str) // true or false
```

<br/>

## 加密

示例:
```js
import { encrypt } from '@/utils/encrypt'

encrypt(str) // 加密后的字符串
```

<br/>

## 汉字转拼音

示例:
```js
import { chineseToPinYin } from '@/utils/pinyin'

chineseToPinYin('中国') // ZhongGuo
```

<br/>
