/* eslint-disable */
const path = require("path");
const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");
const ImageminWebpack = require("imagemin-webpack");

const optimization = () => {
    const configObj = {
        splitChunks: {
            chunks: "all",
        },
    };

    if (isProd) {
        configObj.minimizer = [
            new OptimizeCssAssetWebpackPlugin(),
            new TerserWebpackPlugin(),
        ];
    }

    return configObj;
};
const filename = (ext) =>
    isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

const plugins = () => {
    const basePlugins = [
        new HtmlWebpackPlugin({
            hash: false,
            template: path.resolve(__dirname, "src/index.html"),
            filename: "index.html",
            minify: {
                collapseWhitespace: isProd,
            },
        }),
        // new CopyWebpackPlugin({
        //     patterns: [{
        //         from: path.resolve(__dirname, "src/assets"),
        //         to: path.resolve(__dirname, "dist/assets"),
        //     }, ],
        // }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: `./css/${filename("css")}`,
        }),
    ];



    if (isProd) {
        basePlugins.push(
            new ImageminWebpack({
                bail: false,
                cache: true,
                imageminOptions: {
                    plugins: [
                        ["gifsicle", { interlaced: true }],
                        ["jpegtran", { progressive: true }],
                        ["optipng", { optimizationLevel: 5 }],
                        ["svgo", { plugins: [{ removeViewBox: false }] }],
                    ],
                },
            })
        );
    }

    return basePlugins;
};

module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: "./js/index.js",
    output: {
        filename: `./js/${filename("js")}`,
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        open: true,
        // hot: true,
        // compress: true,
        port: 5500,
    },
    optimization: optimization(),
    plugins: plugins(),
    devtool: isDev ? "source-map" : undefined,
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.html$/i,
                loader: 'html-loader'

            },
            {
                test: /\.(s[ac]ss|css)$/,
                exclude: /node_modules/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,

                        options: {
                            // hmr: isDev,
                            publicPath: (resourcePath, context) => {
                                return path.relative(path.dirname(resourcePath), context) + "/";
                            },
                        },
                    },
                    "css-loader",
                    'sass-loader'
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name][ext]'
                }

            },
            {
                test: /\.(woff|woff2|ttf|otf|eot)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            },

        ],
    },
};
