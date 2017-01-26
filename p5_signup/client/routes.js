// react
import React from "react";

// route from react router
import { Route, IndexRoute } from "react-router";

import App from "./components/App";
import Greeting from "./components/Greeting";
import Signup from "./components/signup/Signup";

// it is exporting an existing component, not def
// The route is like component with hierachy
// App top, then have nav bar
// App has sub html tag
export default (
  <Route path="/" component={App}>
    <IndexRoute component={Greeting} />
    <Route path="signup" component={Signup} />  
  </Route>
);
