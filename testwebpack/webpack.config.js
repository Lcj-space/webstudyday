/**
 * Created by 13675 on 2017/4/6.
 */
var webpack = require('webpack');
var babel = require('babel-loader');
module.exports = {
    entry: {
        index:'./src/index.js',
        a:'./src/a.js'
    },
    output:{
        path: '/dist/',
        filename: '[name].js'
    },
    module:{
        loaders:[{
            test:/\.js$/,
            exclude: /node_modules/,
            loader:'bable',
            query:{
                presets:['es2015','stage-0','react']
            }
        }]
    }
};
