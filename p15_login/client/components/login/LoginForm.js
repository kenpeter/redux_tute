import React from "react";
import TextFieldGroup from "../common/TextFieldGroup";
import validateInput from "../../../server/shared/validations/login";
import { connect } from "react-redux";

import { login } from "../../actions/login";

class LoginForm extends React.Component {
  constructor(props) {
    // super props
    super(props);
    
    // state 
    this.state = {
      errors: {}, // need init val
      identifier: "", // need init val
      password: "", // need init val
      isLoading: false
      
    } // no semi column
    
    // this on change = assign 
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  // The main purpose of this func is check all input fields not empty
  isValid() {
    // desctructor
    // we have not define validateInput yet in client side
    const { errors, isValid } = validateInput(this.state);
  
    // not valid
    if(!isValid) {
      // set state
      // errors
      this.setState({ errors });
      
    }
    
    // return true or false
    return isValid;
  } 
  

  // any text field
  onChange(e) {
    // why need 
    // e.target.name, it is the field.
    // why [e.target.name]????, because cannot
    // use `${e.target.name}`
    this.setState({
      [e.target.name]: e.target.value
    });
    
  }
  
  
  onSubmit(e) {
    e.preventDefault();
  
    if(this.isValid()) {
      // all good
      
      // reset all errors
      this.setState({ errors: {}, isLoading: true});
      
      // remote request
      this.props.login(this.state).then(() => {
        (res) => {
          this.context.router.push("/");
        },
        (err) => {
          // err.data
          this.setState({errors: err.data.errors});
        }
      });
    }
    else {
      //
      
    }
  }




  render() {
    const { errors, identifier, password, isLoading } = this.state;
  
    return (
      <form onSubmit={this.onSubmit}>
      
        {/* username or email */}
        {/* some props not used, so they are ignored, like onBlur */}
        <TextFieldGroup
          error={errors.identifier}
          label="Username / email"
          value={identifier}
          onChange={this.onChange}
          
          fieldname="identifier"
        />
        
        {/* password */}
        <TextFieldGroup
          error={errors.password}
          label="Password"
          value={password}
          onChange={this.onChange}
          
          fieldname="password"
          type="password"
        />
        
        {/* submit button */}
        <div className="form-group">
          <button  disabled={ isLoading }  className="btn btn-primary btn-lg">
            Login
          </button>
        </div>
      </form>
    );
  }

}

LoginForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

// https://stackoverflow.com/questions/33950433/warning-failed-proptype-invalid-prop-component-supplied-to-route
export default connect(null, { login })(LoginForm);
