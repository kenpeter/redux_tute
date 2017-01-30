import React from "react";
import timezone from "../../data/timezone";
import classnames from "classnames";
import validateInput from "../../../server/shared/validations/signup";

import TextFieldGroup from "../common/TextFieldGroup";
import { browserHistory } from 'react-router';


// import map
// form lodash
// map
import map from 'lodash/map';

// axios
import axios from "axios";


class SignupForm extends React.Component {
  // constructor, props
  constructor(props) {
    // super props
    super(props);
    
    // state 
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
      
      timezone: "",
      errors: {},
      isLoading: false,
      invalid: false // basically, if any component not valid, diable signup button
    } // no semi column
    
    // this on change = assign 
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.isUserExist = this.isUserExist.bind(this);
  }


  onChange(e) {
    //test
    //console.log("--test--");
    //console.log(e.target.name);
  
    // if you put e.target.name as key in object
    // will give you syntax error.
    // so need ot use [] for key
    this.setState({
      [e.target.name]: e.target.value
    });
  }


  isUserExist(e) {
    // https://stackoverflow.com/questions/17821630/get-current-field-name-in-to-change-display-option
    let myField = e.target.name;
  
    // myVal can be email or username
    let myVal = e.target.value;
    
    //
    let invalid = false;
    
    if(myVal !== '') {
      // check remote
      this.props.isUserExist(myVal).then((res) => {
        
        //test
        //console.log("--- in isUserExist ----");    
        //console.log(res);
        
        //test
        // what is inside state
        let errors = this.state.errors;
        
        //test
        console.log("---- in isUserExist ----");
        console.log(this.state.errors);
        
        if(res.data.user) {
          // user already exist
          // errors.username
          // errors.email
          // errors.password
          // errors.passwordConfirm
          // errors.timezone
          // you can see the pattern
          errors[myField] = "There is a user with such field: " + myField;
          invalid = true;
        }
        else {
          // user not exist
          errors[myField] = '';
          invalid = false;
        }
        
        // need to set state, otherwise lost.......
        this.setState({ errors: errors, invalid: invalid });
      });
    }
    else {
      console.log("--- in isUserExist ----");    
      console.log(myVal);
    }
    
  }

  // check whether input is valid
  isValid() {
    // desctructor
    // we have not define validateInput yet in client side
    const { errors, isValid } = validateInput(this.state);
  
    // not valid
    if(!isValid) {
      // set state
      // errors
      this.setState({ errors });
      
      //test
      console.log("-- in isValid, what is the state --");
      // console.log(this.state); // It seems even set state, the errors is not there.
      console.log(errors);
    }
    
    // return true or false
    return isValid;
  }


  onSubmit(e) {
    // prevent default submit behaviour
    e.preventDefault();
  
    // if all fields valid
    if(this.isValid()) {
      // errrors in state
      // it is loading
      this.setState({ errors: {}, isLoading: true});
      
      // submit user signup
      // axios.post("/api/users", userData).then.....
      this.props.userSignupRequest(this.state).then(
        // all good do something
        () => {
        
          //test
          console.log("-- onSubmit, form post good --");
          this.setState({ isLoading: false });
          
          // Add flash msg
          // by call action
          // reducer will add it to state
          this.props.addFlashMessage({
            type: "success",
            text: "you signed up"
          });
          
          // redirect
          //browserHistory.push("/");
          
          // so we define context in the very bottom
          // router
          // push /
          this.context.router.push("/");
        }, 
        
        // data is error
        // inside an object
        (err) => { 
       
          //test
          console.log("-- onSubmit, form post bad, what is state then --");  
          console.log(this.state);
     
          this.setState({ errors: err.response.data, isLoading: false });
               
        }
      );
    } // validate    
  }

  render() {
    // error
    const { errors } = this.state;
  
    //test
    //console.log("---- in render, state ------");
    //console.log(this.state);
  
    // transform to html
    // map data
    // callback func, arrow func
    // val first
    // it seems change from option to opt solved the issue.
    const opt = map(timezone, (val, key) =>
      <option key={val} value={val}>{key}</option>
    );
  
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join us</h1>
    
        {/* username */}
        <TextFieldGroup
          error={errors.username}
          label="Username"
          value={this.state.username}
          onChange={this.onChange}
          
          isUserExist={this.isUserExist}
          fieldname="username"
        />
        
        
        {/* email */}
        <TextFieldGroup
          error={errors.email}
          label="Email"
          value={this.state.email}
          onChange={this.onChange}
          
          isUserExist={this.isUserExist}
          fieldname="email"
        />
        
        
        {/* password */}
        <TextFieldGroup
          error={errors.password}
          label="Password"
          value={this.state.password}
          onChange={this.onChange}
          
          fieldname="password"
        />
        
                
        {/* password */}
        <TextFieldGroup
          error={errors.passwordConfirm}
          label="Password confirmation"
          value={this.state.passwordConfirm}
          onChange={this.onChange}
          
          fieldname="passwordConfirm"
        />
        
        
        {/* time zone is not a text group, still need classnames */}
        <div className={classnames("form-group", { 'has-error': errors.timezone })}>
          <label className="control-label">Timezone</label>
          <select
            className="form-control"
            name="timezone"
            onChange={this.onChange}
            value={this.state.timezone}
          >
            <option value="" disabled>Choose Your Timezone</option>
            {opt}
          </select>
          {errors.timezone && <span className="help-block">{errors.timezone}</span>}
        </div>
        
        
        {/* submit button */}
        <div className="form-group">
          <button  disabled={this.state.isLoading || this.state.invalid }  className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
      </form>
    );
  
  }
}

/*
SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}
*/

// https://github.com/ReactTraining/react-router/issues/975
// this component
// context types
// router, what ever context
// obj
SignupForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default SignupForm;
