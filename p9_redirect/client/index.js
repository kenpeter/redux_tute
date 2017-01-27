// react
import React from "react";

// react dom, render
import { render } from "react-dom";

// so router and other stuff in index.js, not in component
// so browser has history in react router
import { Router, browserHistory } from "react-router";

// What is provider? allow store to to pass
import { Provider } from "react-redux";

// what is thunk?
// let foo = () => 1+2
// foo is thunk, because 1+2 is store to foo
// foo can be used later.
import thunk from "redux-thunk";

//
import { createStore, applyMiddleware } from "redux";

// routes
import routes from "./routes";

// (state = {}), init value
// () => state
const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk)
);


// render with router, which is a react component
// history, passed as prop
// browser history
render(
  <Provider store={store}>
    <Router 
      history={browserHistory}
      routes={routes}
    />
  </Provider>, 
  document.getElementById("app")
);

