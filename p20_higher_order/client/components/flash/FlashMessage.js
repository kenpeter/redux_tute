import React from "react";
import classNames from "classnames";


class FlashMessage extends React.Component {
  // constructor
  // props, need to have parent props
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }


  onClick() {
    this.props.deleteFlashMessage(this.props.message.id);
  }

  render() {
    // this.props.message passed by top parent.
    // so id, type, text are props
    // where we define them, in client/reducers/flashMessages.js
    // Any one of them changes, cause FlashMessage component rerender.
    const {id, type, text} = this.props.message;
  
    // https://github.com/JedWatson/classnames
    let myClass = classNames({
      'alert': true,
      'alert-success': type === 'success',
      'alert-danger': type === 'error'
    });
  
    return (
      <div className={myClass} >
        
        <button onClick={this.onClick} className="close">
          <span>X</span>
        </button>
        
        {text}
      </div>
    );
  }
  
}


export default FlashMessage;
