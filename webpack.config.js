const webpack = require('webpack');
const path = require('path');

const config = {

    entry: path.resolve('src/index.js'),

    output:{
        path: path.resolve('build'),
        filename: 'bundle.js'
    },

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }]
    },

    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 8080
    }

};

module.exports = config;