// validator
import Validator from "validator";

// is error empty
import isEmpty from "lodash/isEmpty";

// export default func
// pass input form data to this func
export default function validateInput(data) {
  // init errors emtpy obj  
  let errors = {};

  // username not empty
  if(Validator.isNull(data.identifier)) {
    errors.identifier = "This field is required";
  }

  
  // password not empty
  if(Validator.isNull(data.password)) {
    errors.password = "This field is required";
  }
  
  return {
    errors,
    isValid: isEmpty(errors)
  }
}
