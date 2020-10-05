import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homePage";
import LoginPage from "./pages/auth/loginPage";
import SignUpPage from "./pages/auth/signUpPage";
import ForgotPasswordPage from './pages/auth/forgotPasswordPage';

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/forgot-password" component={ForgotPasswordPage} />
      </Switch>
    </Fragment>
  );
}

export default App;
