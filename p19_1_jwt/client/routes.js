// routes is more like controller
// react
import React from "react";

// route from react router
import { Route, IndexRoute } from "react-router";

import App from "./components/App";
import Greeting from "./components/Greeting";
import Signup from "./components/signup/Signup";
import LoginPage from "./components/login/LoginPage";

import NewEventPage from "./components/events/NewEventPage";

// it is exporting an existing component, not def
// The route is like component with hierachy
// App top, then have nav bar
// App has sub html tag


// App (App has nav bar and flash and children, whcih are here)
// - Greeting (dynamic body)
// - Signup (dynamic body)
// - LoginPage (dynamic body)
// - NewEvetPage (dynamic body)
export default (
  <Route path="/" component={App}>
    <IndexRoute component={Greeting} />
    <Route path="signup" component={Signup} />
    <Route path="login" component={LoginPage} />
    <Route path="new-event" component={NewEventPage} />
  </Route>
);
