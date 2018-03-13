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
        resolve: resolve
    }

    m.exports = settings;
}(module));