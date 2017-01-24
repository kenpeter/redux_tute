// need to have babel-cli, as it doesn't understand import
import express from "express";

// from path
import path from "path";

// const????
const app = express();


// app.get 
// () => {}
// req, res
app.get('/*', (req, res) => {
	const indexPath = path.join(__dirname, "./index.html");
	res.sendFile(indexPath);
});

app.listen(3000, () => console.log("running localhost 3000"));

