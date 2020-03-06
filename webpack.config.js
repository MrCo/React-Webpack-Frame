/**
 * Webpack config配置
 * CodeBy:Mr.Co
 * Date:2018/3/13.
 */
;(function (m) {
    'use strict';
    const webpackHelper = require('./webpack/webpack.helper'),
        plugins = require('./webpack/webpack.plugins'),
        rules = require('./webpack/webpack.rules'),
        hotServer = require('./webpack/webpack.hotserver'),
        resolve = require('./webpack/webpack.resolve');

    const settings = {
        entry: webpackHelper.getEntrySetttings(),
        output: webpackHelper.getOutputSettings(),
        devtool: webpackHelper.getDevToolType(),
        devServer: hotServer,
        module: {
            rules: rules
        },
        plugins: plugins,
        resolve: resolve,
        optimization: {
            splitChunks: {
                // async表示只从异步加载得模块（动态加载import()）里面进行拆分
                // initial表示只从入口模块进行拆分
                // all表示以上两者都包括
                chunks: 'all',
                minSize: 10000,
                minChunks: 2,
                //maxAsyncRequests: 5,
                //maxInitialRequests: 3,
                automaticNameDelimiter: '-',
                name: true,
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true
                    }
                }
            }
        },
        //production 或者 development
        mode:'development'
    }

    m.exports = settings;
}(module));