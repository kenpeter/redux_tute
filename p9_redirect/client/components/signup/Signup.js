// import react
import React from "react";

//
import { connect } from "react-redux";

// signup form
import SignupForm from "./SignupForm";

import { userSignupRequest } from "../../actions/signupActions";

// export default
// can export an arrow func
class Signup extends React.Component {

  render() {
    // so we don't define it in constructor....?
    // look this syntax is like
    // actually userSignupRequest is one of props of Signup
    // it goes the other way.
    const { userSignupRequest } = this.props;
  
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm userSignupRequest={userSignupRequest}/>
        </div>
      </div>
    );
  } 
}

/*
Signup.contextTypes = {
  router: React.PropTypes.object.isRequired
}
*/

// Signup is already top component
// () => {}, map state to props
// so pass state, return empty obj
// { userSignupRequest } is action, can be many actions
// action just payload
export default connect(null, {userSignupRequest})(Signup);
