/**
 * 插件配置
 * CodeBy:Mr.Co
 * Date:2018/3/13
 */
;(function (m,undefined) {
    'use strict';
    let webpack = require('webpack'),
        webpackHelper = require('./webpack.helper'),
        cleanWebpackPlugin = require('clean-webpack-plugin'),
        extractTextPlugin = require('extract-text-webpack-plugin'),
        path = require('path'),
        plugins = [
            //分离css和js文件
            new extractTextPlugin('./css/style-[contenthash].css'),
            //为组件分配ID,通过这个插件webpack可以分析和有限考虑使用最多的模块,并为他们分配最小的ID
            //new webpack.optimize.OccurrenceOrderPlugin()
        ].concat(webpackHelper.getHtmlWebpackPlugins());

    //生产模式将压缩内容
    if(webpackHelper.config.isProduction()){
        plugins.push(new webpack.optimize.UglifyJsPlugin());
    }

    //删除之前构建的目录
    //注: webpack-dev-server也会执行webpack.config,避免打包好的又被删除
    if(process.argv[1].indexOf('webpack-dev-server') < 0){
        let _environment = webpackHelper.environmentDir();
        plugins.push(
            new cleanWebpackPlugin([_environment + '**/*.*', _environment + '**/**/*.*'],{
                root:path.resolve('./'),
                dry:false,
                verbose:true
            })
        );
    }

    //全局变量设置
    // plugins.push(
    //     new webpack.ProvidePlugin({
    //         $:'jquery'
    //     })
    // );

    //公共库打包
    plugins.push(
        new webpack.optimize.CommonsChunkPlugin({
            name:['scripts/libs/react','scripts/libs/jquery'],
            minChunks:Infinity
        })
    );

    //排除不需要打包的业务中脚本
    // plugins.push(
    //     new webpack.IgnorePlugin(/jquyery.js$/)
    // )

    m.exports = plugins;
}(module));