import {React, useState, useEffect } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./App.Style";

import LandingPage from "./Components/LandingPage/LandingPage";
import HomePage from "./Components/Home/homePage";
import {connect } from "react-redux";
import {fetchUser} from "./Redux/actions/userActions";
import  {Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import {AnimatedSwitch} from "react-router-transition";
import { Home } from "@material-ui/icons";

function App(props) {
 
  const {user, fetchUser} = props;

  useEffect(() => {
    fetchUser()
    
  }, []);

  
    return (
      <div>
      <Switch>
          <Route exact path="/"  >
            {user ?  <Redirect to="/home" /> : <LandingPage />}
          </Route>
          <Route exact path="/home" component={HomePage} />
      </Switch>
     
    </div>
    )

 
}
const mapStateToProps = (state) => {
  
  return {user: state.user.user}
}

const app = connect(mapStateToProps, {fetchUser})(App);

export default withStyles(styles)(app);
