import { withStyles } from "@material-ui/core";
import styles from "./landingPage.style";
import HummingDialog from "../HummingDialog/authDialog";

import { withRouter } from "react-router-dom";
import {reduxForm } from "redux-form";
import AccountBoxIcon from '@material-ui/icons/AccountBox';



function LandingPage(props) {
  const { classes, handleSubmit} = props;

  return (
    
    <div className={classes.landingPage}>

      <div>
        <h2 className={classes.h2}>Welcome in</h2>
        <h1 className={classes.h1}>Humming</h1>
        <div className={classes.buttonbox}>
        

          <HummingDialog text="Sign up" signUpForm  handleSubmit={handleSubmit} icon={AccountBoxIcon} />
          <HummingDialog text="Login" handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

const landingPage = reduxForm({
  form:"signUpForm",
  destroyOnUnmount: true
})(LandingPage)

export default withRouter(withStyles(styles)(landingPage));


 