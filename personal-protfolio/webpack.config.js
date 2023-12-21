const path = require('path');

module.exports = {
  entry: '/src/app/layout.js', 
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), 
  },
  module: {
    rules: [
      {
        test: /\.(pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'pdf/', // Specify the output directory for PDF files
            },
          },
        ],
      },
    ],
  },
};
