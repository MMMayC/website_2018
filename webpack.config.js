var path = require('path');
const webpack = require('webpack');
module.exports  = {
    mode: 'none',
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    watch: false,
    module:{
        rules: [
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'env','stage-1']
                }
            },
            {
                test: /\.less$/,
                use: [
                  {
                    loader: "style-loader"
                  },
                  {
                    loader: "css-loader",
                    options: {
                      sourceMap: true,
                      modules: true,
                      localIdentName: "[local]"
                    }
                  },
                  {
                    loader: "less-loader"
                  }
                ]
            }
        ]
    }
}