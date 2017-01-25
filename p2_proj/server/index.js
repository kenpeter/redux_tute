// need to have babel-cli, as it doesn't understand import
import express from "express";

// from path
import path from "path";

// webpack
import webpack from "webpack";

// webpack dev middleware
// server webpack files from MEM, for faster change
import webpackMiddleware from "webpack-dev-middleware";

// webpack config from .dev
import webpackConfig from "../webpack.config.dev";


// const????
const app = express();

// use webpack staright in express
app.use(webpackMiddleware(webpack(webpackConfig)));

// app.get 
// () => {}
// req, res
app.get('/*', (req, res) => {
	const indexPath = path.join(__dirname, "./index.html");
	res.sendFile(indexPath);
});

app.listen(3000, () => console.log("running localhost 3000"));

