const path = require('path')

module.exports = {
    entry: "./src/index.ts",
    mode: "production",
    output: {
        path: path.resolve(__dirname, "dist"),
        globalObject: 'this',
        filename: "index.js",
        libraryTarget: "umd",
        library: "ui-lib"
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.tsx?$/,
                use: ["babel-loader", "ts-loader"],
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts"]
    },
    externals: {
        react: "react"
    }
}