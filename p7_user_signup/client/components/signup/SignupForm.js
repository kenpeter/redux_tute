import React from "react";
import timezone from "../../data/timezone";
import classnames from "classnames";

// import map
// form lodash
// map
import map from 'lodash/map';

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
      isLoading: false
    } // no semi column
    
    // this on change = assign 
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
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

  onSubmit(e) {
    // prevent default
    e.preventDefault();
  
    // we clear up the error, every time we submit
    this.setState({ errors: {}, isLoading: true});
  
    //console.log(this.state);
    
    // axios, is http client with promise.
    // so it can use .then
    // axios.post("/api/users", userData).then.....
    this.props.userSignupRequest(this.state).then(
      // all good do something
      () => {
      
        //test
        console.log("-- onSubmit, form post good --");
        this.setState({ isLoading: false }) ;
        
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
  }

  render() {
    // error
    const { errors } = this.state;
  
    //test
    console.log("---- in render, state ------");
    console.log(this.state);
  
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
        <div className={classnames("form-group", {"has-error": errors.username})} >
          <label className="control-label">Username</label>
          <input
            value={this.state.username}
            onChange={this.onChange}
            type="text"
            name="username"
            className="form-control"
           />
           
           
           {/* 
            errors.username 
            span, className, help-block
            errors.username
           */}
           {errors.username && <span className="help-block">{errors.username}</span>}
        </div>
        
        
        {/* email */}
        <div className={classnames("form-group", {"has-error": errors.email})} >
          <label className="control-label">Email</label>
          <input
            value={this.state.email}
            onChange={this.onChange}
            type="text"
            name="email"
            className="form-control"
           /> 
           
           {errors.email && <span className="help-block">{errors.email}</span>}
        </div>
        
        
        {/* password */}
        <div className={classnames("form-group", {"has-error": errors.password})} >
          <label className="control-label">Password</label>
          <input
            value={this.state.password}
            onChange={this.onChange}
            type="text"
            name="password"
            className="form-control"
           /> 
           
           {errors.password && <span className="help-block">{errors.password}</span>}
        </div>
        
        
        <div className={classnames("form-group", {"has-error": errors.passwordConfirm})} >
          <label className="control-label">PasswordConfirm</label>
          <input
            value={this.state.passwordConfirm}
            onChange={this.onChange}
            type="text"
            name="passwordConfirm"
            className="form-control"
           />
           
           {errors.passwordConfirm && <span className="help-block">{errors.username}</span>} 
        </div>
        
        
        {/* time zone */}
        <div className={classnames("form-group", {"has-error": errors.timezone})} >
          <label className="control-label">Timezone</label>
          <select
            value={this.state.timezone}
            onChange={this.onChange}
            type="text"
            name="timezone"
            className="form-control"
           > 
            <option value="" disabled>Choose time zone</option>
            {opt}
           </select>
           
           {errors.timezone && <span className="help-block">{errors.timezone}</span>}
        </div>
        
        
        {/* submit button */}
        <div className="form-group">
          <button  disabled={this.state.isLoading}  className="btn btn-primary btn-lg">
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

export default SignupForm;
