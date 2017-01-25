import path from "path";

// export from webpack
export default {
  devtools: '#eval-source-map',

  // entry point
  entry: path.join(__dirname, "/client/index.js"),
  
  // output
  // path is very top, it serves from memory
  // so top level
  output: {
    path: "/"
  },
  
  // webpack doesn't know javascript
  // so need to tell webpack
  module: {
    // multiple loaders
    // not just javascript, maybe php, ruby, etc
    loaders: [
      {
        // javascirpt only
        test: /\.js$/,
        // only client js file
        include: path.join(__dirname, "/client"),
        // loaders for this specific loaders
        loaders: ["babel"]
      }
    ]
  },
  
  // resolve, for file extension
  resolve: {
    // empty default
    extensions: ['', '.js']
  }
}
