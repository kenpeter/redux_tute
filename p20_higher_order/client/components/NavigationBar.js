import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import { logout } from "../actions/authActions";

import { addFlashMessage } from "../actions/flashMessages";


// export
// default
// export arrow func directly.
class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  
  logout(e) {
    //console.log("---- logout -----");
    e.preventDefault();
    
    
    this.props.addFlashMessage({
      type: "success",
      text: "You are logout."
    });
    
    // as you can see all the click actions, map to redux action
    this.props.logout();
  }

  
  
  render() {
    const { isAuthenticated } = this.props.auth;
  
    // use ()
    const user_link = (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="new-event">New event</Link></li>
        <li><Link to="signup">Sign up</Link></li>
        {/*
        // NOTE: be very carefully with the comment!!!!!!!!!!!, it make the rest part working
        // and you have no idea why.
        // The issue is that if you call onClick=this.logout(),
        // this.logout() will execute every page re-render
        // so need to have this.logout
        // cannot use Link as no onClick?????????
        */}
        <li><a href="#" onClick={this.logout}>Logout</a></li>
      </ul>
    );
    
    const guest_link = (
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="new-event">New event</Link></li>
        <li><Link to="signup">Sign up</Link></li>
        <li><Link to="login">Login</Link></li>
      </ul>
    );
  
  
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand" href="#">My brand</Link>
          </div>

          <div className="collapse navbar-collapse">
            {isAuthenticated ? user_link : guest_link}
          </div>
        </div>
      </nav>
    );
  }
}


// WELL, the state is THE ENTIRE STATE IN APP
// pass entire state
// pick some props
// assign some
function mapStateToProps(state) {
  // what is state.auth
  return { auth: state.auth };
}


export default connect(mapStateToProps, { logout, addFlashMessage })(NavigationBar);
