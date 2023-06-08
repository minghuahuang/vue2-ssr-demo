## Koa-Vue-SSR

服务使用 `koa`，前端使用 `vue2`, 由 webpack5 构建 SSR 项目。

## 项目启动

安装
```shell
npm install
```

项目构建
```shell
npm run run:all
```

启动服务
```shell
node ./server/server.js
```

## 项目中的问题：

1. 构建过程中，报 `cannot read property 'styles' of undefined`

  问题原因：vue-loader使用需要配置 vue-loader-plugin

  解决办法：webpakc.config.js 配置 vue-loader-plugin
  ```js
  const VueLoaderPlugin = require('vue-loader/lib/plugin')

  plugins: [
    // ...
    new VueLoaderPlugin()
  ]
  ```

2. 构建过程中，报 `cannot find module 'vue-loader/lib/plugin'`

  问题原因：vue-loaderb 版本过高，降至 `^15.0.7`即可。