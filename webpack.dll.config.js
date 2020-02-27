const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        react:['react'],
        antd:['antd']
    },
    output: {
        filename: '[name].dll.js',
        path: path.resolve(__dirname, './dev/dll/'),
        library: '[name]_dll_[hash]'
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:{
                    loader:'babel-loader',
                    options: {
                        presets: ['react', 'es2015']
                    }
                },
                //此规则不包括node_modules文件夹中的文件
                exclude:/node_modules/
            }
        ]
    },
    plugins: [   
        // new copyWebpackPlugin([
        //     {
        //         from:'./node_modules/antd/dist/antd.css',
        //         to:path.resolve(__dirname, './dev/dll/')
        //     }
        // ]),   
        new webpack.DllPlugin({
            name: '[name]_dll_[hash]',
            path: path.resolve(__dirname, './dev/dll/manifest.json')
        })
    ],
    mode: 'development',
    // optimization: {
    //     splitChunks: {
    //         // async表示只从异步加载得模块（动态加载import()）里面进行拆分
    //         // initial表示只从入口模块进行拆分
    //         // all表示以上两者都包括
    //         chunks: 'all',
    //         minSize: 10000,
    //         minChunks: 1,
    //         //maxAsyncRequests: 5,
    //         //maxInitialRequests: 3,
    //         automaticNameDelimiter: '-',
    //         // name: true
    //         cacheGroups: {
    //             vendors: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 priority: -10
    //             },
    //             default: {
    //                 minChunks: 2,
    //                 priority: -20,
    //                 reuseExistingChunk: true
    //             }
    //         }
    //     }
    // }    
}