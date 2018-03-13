/**
 * 热更新配置
 * CodeBy:Mr.Co
 * Date:2018/03/13
 */
;(function (m,undefined) {
    'use strict';
    let webpackHelper = require('./webpack.helper'),
        hotServer = {
            /*proxy:{
                '/api':{
                    target:'http://127.0.0.1',
                    secure:false
                }
            },*/
            contentBase:webpackHelper.environmentDir(),
            historyApiFallback:true,
            inline:true,
            port:'2000'
        };

        m.exports = hotServer;
}(module));