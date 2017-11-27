var path = require('path');

var phaserModule = path.join(__dirname, '/node_modules/phaser-ce/');
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js');
var pixi = path.join(phaserModule, 'build/custom/pixi.js');
var p2 = path.join(phaserModule, 'build/custom/p2.js');

module.exports = {
    entry: "./src/app.ts",
    output: {
        filename: "./dist/bundle.js"
    },
    resolve: {
        extensions: [".ts"],
        alias: {
          'phaser': phaser,
          'pixi': pixi,
          'p2': p2,
        }
    },
    module: {
        rules: [
            { 
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader"
                }
            },
            {
                test: /pixi\.js/,
                loader: 'expose-loader?PIXI'
            },
            {
                test: /phaser-split\.js$/,
                loader: 'expose-loader?Phaser'
            },
            {
                test: /p2\.js/,
                loader: 'expose-loader?p2'
            }
        ]
    }
}