var CopyWebpackPlugin = require("copy-webpack-plugin");
var path = require("path");
var webpack = require("webpack");


var dir_js = path.resolve(__dirname, 'public/js');
var dir_html = path.resolve(__dirname, 'public/html');
var dir_build = path.resolve(__dirname, 'build');

module.exports = {
    entry: path.resolve(dir_js, 'videoloader.js'),
    output: {
        path: dir_build,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: dir_js,
            }
        ]
    },
    plugins: [
        // Simply copies the files over
        new CopyWebpackPlugin([
            { from: dir_html } // to: output.path
        ]),
        new webpack.ProvidePlugin({
        	"react": "react",
        	"react-dom": "react-dom",
            "underscore": "underscore",
            "jquery": "jquery",
            "date-utils": "date-utils",
            "react-tap-event-plugin": "react-tap-event-plugin",
            "react-router": "react-router"
    	})
    ],
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
    devServer: {
        contentBase: dir_build,
    },
};