import { withStyles } from "@material-ui/core";
import styles from "../../App.Style";
import HummingDialog from "../HummingDialog/HummingDialog";
import { reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";
import axios from "axios";

function LandingPage(props) {
  const { classes, history } = props;
  console.log(props);

  const handleSignup = async (...args) => {
    const [username, password, passwordConfirm, name, email] = args;

    const url = "http://localhost:5000/api/v1/user/signup";
    const newUser = {
      name,
      username,
      email,
      password,
      passwordConfirm,
    };

    let user = await axios({
      method: "POST",
      url: url,
      data: newUser,
    });

    if (user.data.status === "success") {
      history.push("/home");
    }
  };

  const handleLogin = async (...args) => {
    const [username, password] = args;

    const url = "http://localhost:5000/api/v1/user/login";

    let user = await axios({
      method: "POST",
      url: url,
      data: { username, password },
    });

    if (user.data.status === "success") {
      history.push("/home");
    }
  };

  return (
    <div className={classes.landingPage}>
      <div>
        <h2 className={classes.h2}>Welcome in</h2>
        <h1 className={classes.h1}>Humming</h1>
        <div className={classes.buttonbox}>
        

          <HummingDialog text="Sign up" signup onSubmit={handleSignup} />
          <HummingDialog text="Login" onSubmit={handleLogin} />
        </div>
      </div>
    </div>
  );
}

const landingPage = reduxForm({
  form: "signUpForm",
})(LandingPage);

export default withRouter(withStyles(styles)(landingPage));

// export default LandingPage;
