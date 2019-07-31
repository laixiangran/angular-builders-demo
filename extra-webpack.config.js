const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: path.resolve(__dirname, 'custom-loader.js'),
                include: [path.resolve(__dirname, 'src')]
            }
        ]
    }
};
