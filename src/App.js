import { withStyles } from "@material-ui/core";
import styles from "./App.Style";

import LandingPage from "./Components/LandingPage/LandingPage";
import HomePage from "./Components/Home/homePage";

import  {Route, Switch } from "react-router-dom";

function App(props) {
  
  return (
    <div>
      <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={HomePage} />
      </Switch>
     
    </div>
    
  );
}

export default withStyles(styles)(App);
