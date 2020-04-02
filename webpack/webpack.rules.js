/**
 * 规则配置
 * CodeBy:Mr.Co
 * Date:2018/03/13
 */
; (function (m, undefined) {
    'use strict';
    let extractTextPlugin = require('extract-text-webpack-plugin'),
        path = require('path'),
        os = require('os'),
        rules = [
            // {
            //     loader: "thread-loader",
            //     // loaders with equal options will share worker pools
            //     // 设置同样option的loaders会共享
            //     options: {
            //         // worker的数量，默认是cpu核心数
            //         workers: os.cpus().length,

            //         // 一个worker并行的job数量，默认为20
            //         workerParallelJobs: 50,

            //         // 添加额外的node js 参数
            //         workerNodeArgs: ['--max-old-space-size=1024'],


            //         // 允许重新生成一个dead work pool
            //         // 这个过程会降低整体编译速度
            //         // 开发环境应该设置为false
            //         poolRespawn: false,


            //         //空闲多少秒后，干掉work 进程
            //         // 默认是500ms
            //         // 当处于监听模式下，可以设置为无限大，让worker一直存在
            //         poolTimeout: 2000,

            //         // pool 分配给workder的job数量
            //         // 默认是200
            //         // 设置的越低效率会更低，但是job分布会更均匀
            //         poolParallelJobs: 50,

            //         // name of the pool
            //         // can be used to create different pools with elsewise identical options
            //         // pool 的名字
            //         //
            //         name: "my-pool"
            //     }
            // },
            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                include: /(src)/,
                //webpack3.x写法
                //loader:'url-loader?limit=1024&name=/images/[name]-[hash:8].[ext]'

                //webpack4.x写法
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name]-[hash:8].[ext]',
                            outputPath: '/images/'
                        }
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [path.resolve(__dirname, '../src')],
                exclude: /node_modules/,
                options: {
                    fix: true
                }
            },
            {
                test: /\.(js|jsx)$/,
                include: /(src)/,
                use: [
                    {
                        loader: "thread-loader"
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react', 'es2015']
                        }
                    }
                ],

                //use: ['happypack/loader?id=babel']
                include: [path.resolve(__dirname, '../src')]
                //此规则不包括node_modules文件夹中的文件
                //exclude: /node_modules/
            },

            {
                test: /\.(less|css)/,
                use: extractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                //设置为true的情况下,CSS在React中可以支持以对象方式调用
                                modules: true
                            }
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                javascriptEnabled: true
                            }
                        },
                        {
                            loader: 'thread-loader',
                            options: {
                                workers: os.cpus().length
                            }
                        }
                    ],
                    fallback: 'style-loader'
                })
            },
            // {
            //     test: /\.less$/,
            //     use: extractTextPlugin.extract(['happypack/loader?id=css'])
            // }
        ]

    m.exports = rules;
}(module));
