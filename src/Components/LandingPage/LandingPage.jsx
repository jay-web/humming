import { withStyles } from "@material-ui/core";
import styles from "../../App.Style";
import HummingDialog from "../HummingDialog/HummingDialog";
import { reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import axios from "axios";
import {signUp, login } from "../../Redux/actions/actions";
import { connect } from "react-redux";

function LandingPage(props) {
  const { classes} = props;
  console.log(props);


  return (
    <div className={classes.landingPage}>
      <div>
        <h2 className={classes.h2}>Welcome in</h2>
        <h1 className={classes.h1}>Humming</h1>
        <div className={classes.buttonbox}>
        

          <HummingDialog text="Sign up" signUpForm  />
          <HummingDialog text="Login"  />
        </div>
      </div>
    </div>
  );
}


export default withRouter(withStyles(styles)(LandingPage));


