import React from "react";
import LoginForm from "./LoginForm";

class LoginPage extends React.Component {


  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <LoginForm
          
          />
        </div>
      </div>          
    );
  }

}


// https://stackoverflow.com/questions/33950433/warning-failed-proptype-invalid-prop-component-supplied-to-route
export default LoginPage;
