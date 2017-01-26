// react
import React from "react";

// react dom, render
import { render } from "react-dom";

// so router and other stuff in index.js, not in component
// so browser has history in react router
import { Router, browserHistory } from "react-router";

// routes
import routes from "./routes";

// app
import App from "./components/App";


// render with router, which is a react component
// history, passed as prop
// browser history
render(<Router history={browserHistory} routes={routes}/>, document.getElementById("app"));

