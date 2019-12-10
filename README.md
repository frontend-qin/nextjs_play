```bash
cd file
npm i
npm start
```

## `_app.js` 放置全局公用布局及公共数据

## `_document.js`, 只有在服务器端渲染的时候才会被调用, 用来修改服务器端渲染的文档内容

- 再客户端渲染的时候是没有作用的

- 一般用来配合第三方 css-in-js 方案使用

## 客户端路由跳转

### 方法跳转

```js
import Router from 'next/app'
Router.push({
  pathname: '',
  query: ''
})
```

### 标签跳转

```html
<link href={{ pathname: '/about', query: { name: 'Zeit' }}} />
```

### 替换路由

```jsx
export default () => (
  <div>
    <Link href='/about' replace>
      <a>here</a>
    </Link>
    to read more
  </div>
)
```

### 路由跳转传参

```html
<link href="/home/?a=1" />
```

### 路由导航守卫

```jsx
import Router from 'next/router'

Router.beforePopState(({ url, as, options }) => {
  // I only want to allow these two routes!
  if (as !== '/' || as !== '/other') {
    // Have SSR render bad routes as a 404.
    window.location.href = as
    return false
  }

  return true
})
```

### 路由事件

[路由](!https://nextjs.frontendx.cn/docs/#%E8%B7%AF%E7%94%B1)

- routeChangeStart(url) - 路由开始切换时触发
- routeChangeComplete(url) - 完成路由切换时触发
- routeChangeError(err, url) - 路由切换报错时触发
- beforeHistoryChange(url) - 浏览器 history 模式开始切换时触发
- hashChangeStart(url) - 开始切换 hash 值但是没有切换页面路由时触发
- hashChangeComplete(url) - 完成切换 hash 值但是没有切换页面路由时触发

用 `Router.events.on` 监听路由

```js
const handleRouteChange = url => {
  console.log('App is changing to: ', url)
}

Router.events.on('routeChangeStart', handleRouteChange)
```

用 off 事件去取消监听

```js
Router.events.off('routeChangeStart', handleRouteChange)
```

### 获取接口数据

每个 page 下的页面都提供 `getInitialProps` 静态方法

```js
import React from 'react'

export default class extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render() {
    return <div>Hello World {this.props.userAgent}</div>
  }
}
```

组件某个使用 `getInitialProps` 方法

```js
const Page = ({ stars }) => <div>Next stars: {stars}</div>

Page.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default Page
```

## next.config.js 配置文件

> next 的配置文件

## 配置 antd 的 css 文件自动注入

- next.config.js

```js
const withCss = require('@zeit/next-css')
module.exports = withCss({})
```
