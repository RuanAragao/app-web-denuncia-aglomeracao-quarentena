import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SplashScreen from "./pages/Splash";
import Home from "./pages/Home";

function App() {
  const splashScreen = localStorage.getItem("splash_screen");

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {splashScreen ? <Home /> : <SplashScreen />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
