import React from "react";
import map from 'lodash/map';
import FlashMessage from "./FlashMessage";
import { connect } from "react-redux";

import { deleteFlashMessage } from "../../actions/flashMessages";

class FlashMessagesList extends React.Component {

  render() {
    
    // map state to props
    // so we have messages (see key)
    // xxxxx.map(func)
    // msg => component
    const msgs = this.props.messages.map(message =>
      <FlashMessage key={message.id} message={message} deleteFlashMessage={this.props.deleteFlashMessage} />
    );
  
    return (
      <div>
        {msgs}  
      </div>
    );
  }
}

// state is coming from the store
// state.flashMessages is from 
//https://github.com/reactjs/react-redux/blob/master/docs/api.md
function mapStateToProps(state) {
  // where is this state.flashMessages coming from??????????
  return { messages: state.flashMessages }
}


export default connect(mapStateToProps, {deleteFlashMessage})(FlashMessagesList);

