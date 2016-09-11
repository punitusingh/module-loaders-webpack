/**
 * Created by yc05ps3 on 9/10/16.
 */
//if not production then debug=true
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
    //__dirname: current directory
    context: __dirname,
    //if not production then devtool:"inline-sourcemap"
    devtool: debug ? "inline-sourcemap" : null,
    //entry point relative to context set above
    entry: "./js/scripts.js",
    output: {
        path: __dirname + "/js",
        filename: "scripts.min.js"
    },
    //if not production then no need to run minification things
    plugins: debug ? [] : [
        //Dedupe: strip out any duplicate code
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        //get rid of sourcemap, comment etc for production
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ]
};