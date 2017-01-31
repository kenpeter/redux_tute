import React from "react";
import classnames from "classnames";

const TextFieldGroup = (props) => {

  return (
    <div className={classnames("form-group", {"has-error": props.error})} >
      <label className="control-label">{props.label}</label>
      <input
        value={props.value}
        onChange={props.onChange}
        type={props.type}
        name={props.fieldname}
        
        onBlur={props.isUserExist}
        className="form-control"
       />
       
       {props.error && <span className="help-block">{props.error}</span>}
    </div>
  );
}


export default TextFieldGroup;
