const path = require('path');

module.exports = {
    entry: ['babel-polyfill','./src/index.js'],
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/dist/',
        filename: "countriesbundle.js"
    },
    module: {
        loaders: [
            {
              loader: 'babel-loader',
              query: {
                presets: ['react', 'es2015', 'stage-1'],
              },
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    resolve: {
      extensions: ['.js', '.jsx','.css'],
    }
};
