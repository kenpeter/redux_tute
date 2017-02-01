## Intro

Tutorial based on: https://www.youtube.com/watch?v=5oiXG9f6GO0&list=PLuNEz8XtB51K-x3bwCC9uNM_cxXaiCcRY

https://github.com/Remchi/reddice/


## Flow

* node index.js (index.js serves the index.html)
* index.html contains div id=app and bundle.js
* webpack has entry point, client/index.js, output to bundle.js by default
* client/index.js, has provider with store (state trees from combineReducer)

* client/index.js, also has 1 single route.
* This single route has default index (map to App.js component)
* This single route has signup route (map to Signup.js component)

* Signup.js has sub component SignupForm.js
* SignupForm.js allows you to click
* This click calls a function, which is aciton
* action has action.type and payload

* Reducer get this aciton, it generates new state.

