# React + Webpack脚手架 V1.0
> 主要以组件化开发方式,目前该脚手架只针对IE8+浏览器进行开发迭代

***

## 目录结构
```html
|---- README.md
|---- package.json
|---- dev(通过webpack生产)
|---- node_modules
|---- src 源目录
|   |---- commons       公共
|   |---- assets        资源
|   |---- components    组件
|   |---- libs          类库
|   |---- templates     模板
|---- webpack 配置目录
|---- webpack.config.js 
```

***

## 第三方库说明

- "babel-core": "^6.26.0",
- "babel-preset-es2015": "^6.24.1",
- "babel-preset-stage-0": "^6.24.1",
- "clean-webpack-plugin": "^0.1.19",
- "extract-text-webpack-plugin": "^3.0.2",
- "glob": "^7.1.2",
- "html-webpack-plugin": "^2.30.1",
- "less": "^3.0.1",
- "less-loader": "^4.1.0",
- "react-router": "^4.2.0"

## 运行方式
> 必须按步骤执行

* 开发环境 npm run dev
* 调试环境 npm run hot
* 开发调试 npm run hotdev
* 接口代理 npm run server
* 代码发布 npm run build

## 开发迭代记录
> 2018.03.13    搭建