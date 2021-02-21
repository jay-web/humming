import { Field, reduxForm } from "redux-form";
import React from "react";
import TextField from "@material-ui/core/TextField";

const SignupFields = (props) => {
  const { input, label, meta } = props;
  return (
    <>
      <TextField
        {...input}
        id="outlined-basic"
        label={label}
        variant="outlined"
      />
      {meta.touched && meta.error}
    </>
  );
};

class HummingTextField extends React.Component{

  render(){
    const {signup} = this.props;
  return (
   <>
     { signup && <Field label="Name" type="text" name="name" component={SignupFields}  /> }
      <Field
        label="Username"
        type="text"
        name="username"
        component={SignupFields}
        
      />
      { signup && <Field label="Email" type="text" name="email" component={SignupFields} /> }
      <Field
        label="Password"
        type="text"
        name="password"
        component={SignupFields}
        
      />
      {signup && <Field
        label="Password Confirm"
        type="text"
        name="passwordConfirm"
        component={SignupFields}
        
      /> }
    </>
  )
  }
};

export default reduxForm({
  form: "signUpForm",
  destroyOnUnmount: false
})(HummingTextField);
