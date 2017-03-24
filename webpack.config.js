const path = require('path');

module.exports = {
    devtool: 'eval-source-map',
    entry: './demo/index.ts',
    output: {
        filename: 'demo.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /(node_modules)/,
                use: 'ts-loader'
            }
        ]
    },
    devServer: {
        host: '0.0.0.0',
        port: 3000
    }
};
