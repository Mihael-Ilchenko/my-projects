const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { DefinePlugin } = require("webpack");


const NODE_ENV = process.env.NODE_ENV;
module.exports = {
    target: "node",
    mode: NODE_ENV ? NODE_ENV : "development",
    entry: path.resolve(__dirname, "../src/server/server.js"),
    output: {
        path: path.resolve(__dirname, "../dist/server"),
        filename: "server.js",
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    },
    externals: [nodeExternals()],
    module: {
        rules: [{
                test: /\.[tj]sx?$/,
                use: ["ts-loader"],
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: "css-loader",
                        options: {
                            modules: {
                                mode: "local",
                                localIdentName: "[name]__[local]--[hash:base64:5]",
                            },
                            onlyLocals: true,
                        },
                    },
                    'sass-loader'
                ],
            },
            {
                test: /\.(woff|woff2|ttf|otf|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader', 'image-webpack-loader'
                ],
            },
        ],
    },
    optimization: {
        minimize: false,
    },
    plugins: [new DefinePlugin({ 'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'` })]
};