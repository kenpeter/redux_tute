import React from "react";
import { connect } from "react-redux"; // connect means connect to react store.
import { addFlashMessage } from "../actions/flashMessages";

// https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e#.w9ys155w2
export default function requireAuth(PassedComponent) {


  // define a component
  class ComposedComponent extends React.Component {
  
    // In this component we do some checking, then 
    componentWillMount() {
      console.log("--- higher order called,  componentWillMount ---");
      
      if(this.props.isAuthenticated) {
        // all good 
      }
      else {
        // fire error msg
        this.props.addFlashMessage({
          type: "error",
          text: "you are not login."
        });
        
        // redirect, ok..... that will do, like early return.
        this.context.router.push("/login");
      }
    }  
    
    
    componentWillUpdate() {
      console.log("--- higher order called,  componentWillUpdate ---");
      
      if(this.props.isAuthenticated) {
        // all good 
      }
      else {
        // fire error msg
        this.props.addFlashMessage({
          type: "error",
          text: "you are not login."
        });
        
        // redirect, ok..... that will do, like early return.
        this.context.router.push("/login");
      }    
    }
  
  
    // render 
    // also include a passed component
    // props, the props belongs to PassedComponent
    
    //test
    //console.log("--- higher order called ---");
    
    render() {
     
      // of course, there is no props
      // need to have this.props
      return <PassedComponent {...this.props}/>
    }
  }
  
  
  // https://github.com/reactjs/react-redux/blob/master/docs/api.md
  function mapStateToProps(state) {
    return { isAuthenticated: state.auth.isAuthenticated }
  }
  
  
  ComposedComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
  }
  
  
  return connect(mapStateToProps, { addFlashMessage })(ComposedComponent);
  
}
