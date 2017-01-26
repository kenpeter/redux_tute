import React from "react";
import timezone from "../../data/timezone";

// import map
// form lodash
// map
import map from 'lodash/map';

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
      timezone: ""
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
    console.log(this.state);
  }

  render() {
    // transform to html
    // map data
    // callback func, arrow func
    // val first
    // it seems change from option to opt solved the issue.
    const opt = map(timezone, (val, key) =>
      <option key={val} value={val}>{key}</option>
    );
  
    //console.log("nothing??");
    //console.log(timezone);
    //console.log(opt);
  
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join us</h1>
    
        <div className="form-group">
          <label className="control-label">Username</label>
          <input
            value={this.state.username}
            onChange={this.onChange}
            type="text"
            name="username"
            className="form-control"
           /> 
        </div>
        
        <div className="form-group">
          <label className="control-label">Email</label>
          <input
            value={this.state.email}
            onChange={this.onChange}
            type="text"
            name="email"
            className="form-control"
           /> 
        </div>
        
        <div className="form-group">
          <label className="control-label">Password</label>
          <input
            value={this.state.password}
            onChange={this.onChange}
            type="text"
            name="password"
            className="form-control"
           /> 
        </div>
        
        <div className="form-group">
          <label className="control-label">PasswordConfirm</label>
          <input
            value={this.state.passwordConfirm}
            onChange={this.onChange}
            type="text"
            name="passwordConfirm"
            className="form-control"
           /> 
        </div>
        
        <div className="form-group">
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
        </div>
        
        <div className="form-group">
          <button className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
      </form>
    );
  
  }
}

export default SignupForm;
