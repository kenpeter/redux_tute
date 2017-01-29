import path from "path";
import webpack from "webpack";
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';

export default {
  devtools: 'eval-source-map',
  entry: [
  	"webpack-hot-middleware/client",
		path.join(__dirname, "/client/index.js")
	],

  output: {
    path: "/",
		publicPath: "/"
  },
  
  // plugins................. (SSSSSSSSSSSSSSSSSss)
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, "/client"), // it seems I can do client or /client with path.join
          path.join(__dirname, '/server/shared')
        ],
        loaders: ["react-hot", "babel"]
      }
    ]
  },
  
  resolve: {
    extensions: ['', '.js']
  }
}
