const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const copyWebpackPlugin = require('copy-webpack-plugin');
const resolve = require('./webpack/webpack.resolve');

module.exports = {
    entry: {
        vendor:['react','react-dom','echarts']        
    },
    output: {
        filename: '[name].dll.js',
        path: path.resolve(__dirname, './dev/dll/'),
        library: '[name]_dll_[hash]'
    },    
    plugins: [   
        new webpack.DllPlugin({
            name: '[name]_dll_[hash]',
            path: path.resolve(__dirname, './dev/dll/manifest.json')
        })
    ],
    resolve:resolve  
}