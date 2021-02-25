import {React, useState, useEffect } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./App.Style";

import LandingPage from "./Components/LandingPage/LandingPage";
import HomePage from "./Components/Home/homePage";
import {connect } from "react-redux";
import {fetchUser} from "./Redux/actions/userActions";
import  {Route, Switch } from "react-router-dom";
import axios from "axios";

function App(props) {
 
  const {user, fetchUser} = props;

  useEffect(() => {
    fetchUser()
    
  }, []);

  if(!user){
    return (
      <div>
      <Switch>
          <Route exact path="/" component={LandingPage} />
      </Switch>
     
    </div>
    )
  }else{
    return (
      <div>
        <Switch>
            <Route exact path="/" component={HomePage} />
        </Switch>
       
      </div>
      
    );
  }
  
 
}
const mapStateToProps = (state) => {
  
  return {user: state.user.user}
}

const app = connect(mapStateToProps, {fetchUser})(App);

export default withStyles(styles)(app);
