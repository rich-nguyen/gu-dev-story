module.exports = {
    entry: "./src/app.ts",
    output: {
        filename: "./dist/bundle.js"
    },
    resolve: {
        extensions: [".ts"]
    },
    module: {
        rules: [
            { 
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader"
                }
            }
        ]
    }
}