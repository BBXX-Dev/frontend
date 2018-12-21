const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    resolve: {
        extensions: [
            ".ts",
            ".tsx",
            ".webpack.js",
            ".web.js",
            ".mjs",
            ".js",
            ".json",
            ".png"
        ]
    },
    output: {
        publicPath: "/", // base path for all assets
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
        chunkFilename: "[id][hash].js"
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                loader: "ts-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: "javascript/auto"
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: "url-loader",
                options: {
                    limit: 25000
                }
            },
            {
                test: /\.(png|jpg|gif|jpeg|ttf|eot|woff|woff2)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[path][name].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true, // redirect 404s to index.html
        contentBase: path.join(__dirname, "dist"),
        port: 3000,
        open: true,
        compress: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":
                "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers":
                "X-Requested-With, content-type, Authorization"
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        })
    ]
};
