// import react
import React from "react";

import SignupForm from "./SignupForm";

// export default
// can export an arrow func
class Signup extends React.Component {

  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm />
        </div>
      </div>
    );
  }
  
}

export default Signup;
