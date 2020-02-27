/**
 * 规则配置
 * CodeBy:Mr.Co
 * Date:2018/03/13
 */
;(function (m,undefined) {
    'use strict';
    let extractTextPlugin = require('extract-text-webpack-plugin'),
        rules = [
            {
                test:/\.(png|jpg|gif|jpeg)$/i,
                
                //webpack3.x写法
                //loader:'url-loader?limit=1024&name=/images/[name]-[hash:8].[ext]'

                //webpack4.x写法
                use: [
                    {
                      loader: 'file-loader',
                      options: {
                        name: '[name]-[hash:8].[ext]',
                        outputPath:'/images/'
                      }
                    }
                  ]
            },
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
            },
            {
                test:/\.css/,
                use:extractTextPlugin.extract({
                    use:[{
                        loader:'css-loader',
                        options:{
                            //设置为true的情况下,CSS在React中可以支持以对象方式调用
                            modules:true
                        }
                    }],
                    fallback:'style-loader'
                })
            },
            {
                test:/\.less/i,
                use:extractTextPlugin.extract([
                    'css-loader',
                    {
                        loader:'less-loader',
                        options:{
                            javascriptEnabled:true
                        }
                    }
                ])
            }
        ]

    m.exports = rules;
}(module));