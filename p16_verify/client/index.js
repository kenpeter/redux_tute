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

// compose is like
//
// f(x) = x^2 + 3x + 1
// g(x) = 2x
// (f * g)(x) = f(g(x)) = f(2x) = 4x^2 + 6x + 1 
//
// create store
// apply middle ware
// from redux
import { createStore, applyMiddleware, compose } from "redux";

// routes
import routes from "./routes";

// root reducer
import rootReducer from "./rootReducer";

// (state = {}), init value
// () => state
const store = createStore(
  // so this root reducer (has many sub reducers) put inside the store.
  rootReducer,
  compose(
    applyMiddleware(thunk),
    // for chrome redux dev tools ===============================
    // win dev tool
    // win dev tool()
    // otherwise fat arrow func.
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )  
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

