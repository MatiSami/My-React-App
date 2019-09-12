const path = require("path");

const entryPath = ".";
const entryFile = "js/app.jsx";

module.exports = {
    entry: path.resolve(`${entryPath}/${entryFile}`),
    output: {
        filename: "out.js",
        path: path.join(__dirname, entryPath)
    },
    devServer: {
        contentBase: path.join(__dirname, entryPath),
        publicPath: "/js/",
        compress: true,
        port: 3001
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            },
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ],
          },
          {
        test: /\.css$/,
        use: ["postcss-loader"]
      },
      {
        rules: [
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader', 
                loader: 'url-loader',
              },
            ],
          },
        ],
      }
    ]
    }
};