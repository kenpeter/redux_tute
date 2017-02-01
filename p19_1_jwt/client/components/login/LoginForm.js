import React from "react";
import TextFieldGroup from "../common/TextFieldGroup";
import validateInput from "../../../server/shared/validations/login";
import { connect } from "react-redux";

import { login } from "../../actions/authActions";
import { addFlashMessage } from "../../actions/flashMessages";

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
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.login(this.state).then(
        (res) => {
          
          //test
          console.log("--- in onSubmit(e) -----");
          //console.log(res.data);
          
          // a good place to show msg
          this.props.addFlashMessage({
            type: "success",
            text: "Log in successfully."
          });
          
          this.context.router.push('/');
        },
        (err) => {
          /*
          console.log("--- in onSubmit(e) ---");
          // If you print console.log(err). It will not print obj.
          console.log(err);
          */
          this.setState({ errors: err.response.data.errors, isLoading: false })
        }
      );
    }
  }




  render() {
    const { errors, identifier, password, isLoading } = this.state;
  
    return (
      <form onSubmit={this.onSubmit}>
        {errors.form && <div className="alert alert-danger">{errors.form}</div>}
      
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

// Why we use this, because
// this.context().push("/");
LoginForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

// https://stackoverflow.com/questions/33950433/warning-failed-proptype-invalid-prop-component-supplied-to-route
export default connect(null, { login, addFlashMessage })(LoginForm);
