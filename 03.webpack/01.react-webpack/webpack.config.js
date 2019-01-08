const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const webpack = require("webpack")

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle-[hash:8].js"
    },
    devtool: "inline-surce-map",
    devServer: {
        contentBase: "./dist",
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use : {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin(["./dist"]),
        new webpack.HotModuleReplacementPlugin()
    ]
}