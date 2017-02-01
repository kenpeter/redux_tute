import React from "react";
import TextFieldGroup from "../common/TextFieldGroup";
import { connect } from "react-redux";
import { createEvent } from "../../actions/eventActions";

class EventForm extends React.Component {
  constructor(props) {
    // super props
    super(props);
    
    // state 
    this.state = {
      title: "",
      errors: {},
      isLoading: false
      
    } // no semi column
    
    // this on change = assign 
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  

  // any text field
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    
  }
  
  
  onSubmit(e) {
    e.preventDefault();
    
    //test
    this.props.createEvent(this.state);
  }




  render() {
    const { title, errors, isLoading } = this.state;
  
    // NOTE: errors.title is empty, because we don't have any func to go through form input.
    return (
      <form onSubmit={this.onSubmit}>
        
        {/* title */}
        <TextFieldGroup
          fieldname="title"
          label="Event title"
          value={title}
          
          onChange={this.onChange}
          error={errors.title}
          type="text"
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

EventForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

// https://stackoverflow.com/questions/33950433/warning-failed-proptype-invalid-prop-component-supplied-to-route
export default connect(null, { createEvent })(EventForm);
