/**
 * Webpack Resolve
 * CodeBy:Mr.Co
 * Date:2018/03/13.
 */
;(function (m,undefined) {
    'use strict';
    const path = require('path');
    m.exports = {
        // modules:[__dirname,'node_modules'],
        // alias:{
        //     'jquery':'src/libs/jquery-1.11.3/jquery.min.js'
        // },
        
        //配置过后，import引入时候无需加后缀名
        extensions:['.js','.jsx','json']
    };
}(module));
