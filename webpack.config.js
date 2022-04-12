const path = require('path');

module.exports = {
    mode: 'development',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
    },
    entry: [
        __dirname + '/src/index.js',
        __dirname + '/src/scss/main.scss'
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [],
            }, {
                test: /\.s[ac]ss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { outputPath: 'css/', name: '[name].css'}
                    },
                    'sass-loader', 'postcss-loader'
                ]
            }
        ]
    }
};
