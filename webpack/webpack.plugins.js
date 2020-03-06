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
        copyWebpackPlugin = require('copy-webpack-plugin'),
        bundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
        happyPack = require('happypack'),
        os = require('os'),
        happyThreadPool = happyPack.ThreadPool({ size:os.cpus().length }),
        path = require('path'),
        plugins = [
            //分离css和js文件
            //new extractTextPlugin('./css/style-[contenthash].css'),
            new extractTextPlugin({
                filename:'./css/style-[md5:contenthash].css'
            })

            //为组件分配ID,通过这个插件webpack可以分析和有限考虑使用最多的模块,并为他们分配最小的ID
            //new webpack.optimize.OccurrenceOrderPlugin()
        ].concat(webpackHelper.getHtmlWebpackPlugins());

    //生产模式将压缩内容
    if(webpackHelper.config.isProduction()){
        plugins.push(new webpack.optimize.UglifyJsPlugin());
        //打包性能分析
        plugins.push(new bundleAnalyzerPlugin());
    }

    plugins.push(
        new happyPack({            
            loaders: [      
                //缓存插件，提升打包速度
                'cache-loader',                       
                {
                    loader:'babel-loader',//?presets[]=es2015
                    options:{
                        presets: ['react','es2015'],
                        //开启缓存，第一次编译过后，加快再次编译速度.
                        cacheDirectory:true
                        //exclude:'node_modules'
                    }
                }
            ],            
            threadPool: happyThreadPool,
            id: 'babel'
          })
    );

    plugins.push(
        new happyPack({            
            loaders: [                 
                {
                    loader: "style-loader"
                }, 
                {
                    loader: "css-loader",
                    options:{
                        //设置为true的情况下,CSS在React中可以支持以对象方式调用
                        modules:true        
                    }
                },
                {
                    loader: "less-loader",
                    options:{
                        javascriptEnabled:true
                    }
                }
            ],
            threadPool: happyThreadPool,
            id: 'css'
          })
    )

    //删除之前构建的目录
    //注: webpack-dev-server也会执行webpack.config,避免打包好的又被删除
    // if(process.argv[1].indexOf('webpack-dev-server') < 0){
    //     let _environment = webpackHelper.environmentDir();
    //     plugins.push(
    //         new cleanWebpackPlugin([_environment + '**/*.*', _environment + '**/**/*.*'],{
    //             root:path.resolve('./'),
    //             dry:false,
    //             verbose:true
    //         })
    //     );
    // }

    //全局变量设置
    // plugins.push(
    //     new webpack.ProvidePlugin({
    //         $:'jquery'
    //     })
    // );

    //公共库打包
    plugins.push(
        // new webpack.optimize.CommonsChunkPlugin({
        //     name:['scripts/libs/react','scripts/libs/jquery'],
        //     minChunks:Infinity
        // })        
    );

    //排除不需要打包的业务中脚本
    // plugins.push(
    //     new webpack.IgnorePlugin(/jquyery.js$/)
    // )

    //console.log(path.resolve(__dirname,'../dll/manifest.json'));

    plugins.push(        
        new webpack.DllReferencePlugin({
            //context:__dirname,
            manifest:path.resolve(__dirname,'../dev/dll/manifest.json')
        })        
    );    

    
    m.exports = plugins;
}(module));