# React + Webpack脚手架 V2.0（SPA版本）
> 主要以组件化开发方式,目前该脚手架只针对IE8+浏览器进行开发迭代
> V2.0版将webpack3.x版本升级到webpack4.x，部分webpack配置有所改变

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
|   |---- pages         页面
|   |---- router        路由
|   |---- enter.js      主入口
|   |---- index.html    主输出模板页(可配置多个)
|---- webpack 配置目录
|---- webpack.config.js 
|---- webpack.dll.js    新增优化打包输出dll配置 
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
- "webpack-dev-server": "^2.9.7"<p style="background:yellow; color:red; font-size:14px;">微Web服务,安装时候版本不可以安装2以上版本,否则会报invalid "instanceof" keyword value Promise</p>  

## 运行方式
> 必须按步骤执行

* 打包优化 npm run dll
* 目录生成 npm run dev
* 开发调试 npm run hot
* 接口代理 npm run server
* 代码发布 npm run build