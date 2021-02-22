import { withStyles } from "@material-ui/core";
import styles from "./landingPage.style";
import HummingDialog from "../HummingDialog/HummingDialog";

import { withRouter } from "react-router-dom";
import {reduxForm } from "redux-form";


function LandingPage(props) {
  const { classes, handleSubmit} = props;
  console.log(props);


  return (
    <div className={classes.landingPage}>
      <div>
        <h2 className={classes.h2}>Welcome in</h2>
        <h1 className={classes.h1}>Humming</h1>
        <div className={classes.buttonbox}>
        

          <HummingDialog text="Sign up" signUpForm  handleSubmit={handleSubmit}/>
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


 