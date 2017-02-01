import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

import users from "./routes/users";
import auth from "./routes/auth";
import events from "./routes/events";

// express app
let app = express();

// app use
// body parser json
app.use(bodyParser.json());

// app use route, then passed in route
// but it doesn't show put, delete, get or post
app.use("/api/users", users);

//
app.use("/api/auth", auth);

//
app.use("/api/events", events);


// webpack config passed to webpack
const compiler = webpack(webpackConfig);

// ask express to use webpack 
app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));

app.use(webpackHotMiddleware(compiler));

// then express serve index.html
// index.html has bundle.js
// bundle.js
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, () => console.log('Running on localhost:3000'));
