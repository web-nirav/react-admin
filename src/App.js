import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homePage";
import LoginPage from "./pages/auth/loginPage";
import SignUpPage from "./pages/auth/signUpPage";
import ForgotPasswordPage from "./pages/auth/forgotPasswordPage";

const authCheck = () => {
  return localStorage.getItem("auth_token") ? true : false;
};

const LoginSignupRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authCheck() ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      authCheck() ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const App = () => {
  return (
    <Fragment>
      <Switch>
        <PrivateRoute exact path="/" component={HomePage} />

        <LoginSignupRoute exact path="/login" component={LoginPage} />
        <LoginSignupRoute exact path="/signup" component={SignUpPage} />
        <LoginSignupRoute
          exact
          path="/forgot-password"
          component={ForgotPasswordPage}
        />
      </Switch>
    </Fragment>
  );
};

export default App;
