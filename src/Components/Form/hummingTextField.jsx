import { Field, reduxForm } from "redux-form";
import React from "react";
import {TextField, withStyles, Grid} from "@material-ui/core";
import Styles from "./hummingTextField.style";
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockIcon from '@material-ui/icons/Lock';
import validate from "../../validate";


const selectIcon = (label) => {
  switch(label){
    case "Name":
      return <AccountCircle />;
    case "Email":
      return <MailOutlineIcon />;
    case "Password":
      return <LockIcon />;
    case "Password Confirm":
      return <LockIcon />;
    default:
      return <AccountCircle />;
  }
}

const SignupFields = (props) => {
  const { input, label, meta } = props;
  return (
    <Grid container spacing={1} alignItems="flex-end">
    <Grid item>
         {selectIcon(label)}
    </Grid>
    <Grid item style={{ width: "25rem"}}>
      <TextField {...input}
        id="outlined-basic"
        label={label}
        style={{ width: "100%", }}
        // variant="outlined"
         />
        {meta.touched && meta.error}
    </Grid>
  </Grid>

  );
};

class HummingTextField extends React.Component{

  render(){
    const {signup, classes} = this.props;
  return (
   <div className={classes.root}>
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
    </div>
  )
  }
};

const hummingTextField = withStyles(Styles)(HummingTextField);

export default reduxForm({
  form: "signUpForm",
  validate:validate,
  destroyOnUnmount: true
})(hummingTextField);
