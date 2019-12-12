const path = require("path");
const webpack = require("webpack");
const paths = require("./paths.js");

const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: paths.appIndexJs,
    mode: "development",
    devtool: "source-map",
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            Popper: "popper.js",
            JQuery: "jquery",
            Util: "exports-loader?Util!bootstrap/js/dist/util",
            Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/util"
        }),
        new htmlWebpackPlugin({
            favicon: paths.appFavicon,
            template: paths.appTemplate
        }),
    ],
    module: {
        rules: [
            {
                // look for js, jsx files
                test: /\.(js|jsx)$/,
                // in the source directory
                include: path.resolve(paths.appJavaScriptSource),
                exclude: /(node_modules)/,
                use: {
                    // babel loader for transpiling js files
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                }
            },
            {
                // look for css or scss files
                test: /\.(css|scss)$/,
                // in styles directory
                include: [paths.appStyles, /(node_modules)/],
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: "[local]" // localIdentName: "[name]__[local]__[hash:base64:5]"
                            }
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    }
}