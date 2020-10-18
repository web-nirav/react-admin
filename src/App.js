import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homePage";
import LoginPage from "./pages/auth/loginPage";
import SignUpPage from "./pages/auth/signUpPage";
import ForgotPasswordPage from "./pages/auth/forgotPasswordPage";
import UsersListPage from "./pages/users/usersListPage";
import UsersAddPage from "./pages/users/usersAddPage";

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
        <PrivateRoute exact path="/users" component={UsersListPage} />
        <PrivateRoute exact path="/users_create" component={UsersAddPage} />

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
