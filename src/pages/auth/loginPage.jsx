import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { loginStart, resetErrors } from "../../redux/user/user.actions";
import {
  selectCurrentUser,
  selectLoginError,
} from "../../redux/user/user.selectors";
import { validationMessages } from "../../utils/validationMessages";

const LoginPage = ({ loginStart, currentUser, loginError, resetErrors }) => {
  const [userCredential, setUserCredential] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    return () => {
      resetErrors();
      // console.log("unmounted");
    };
  }, [resetErrors]);

  const { email, password } = userCredential;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredential({ ...userCredential, [name]: value });
  };

  const validateForm = () => {
    let { email, password } = userCredential;

    let errors = {};
    let isValid = true;
    var pattern = new RegExp(
      /^(([^<>()+*[\]\\.,;:\s@"]+(\.[^<>()+*[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (!pattern.test(email)) {
      isValid = false;
      if (!email || email.trim() === "") {
        errors["email"] = validationMessages.email;
      } else errors["email"] = validationMessages.validEmail;
    }

    if (!password || password.trim() === "") {
      isValid = false;
      errors["password"] = validationMessages.password;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    // console.log("form submitted", userCredential);
    loginStart(email, password);
  };

  if (currentUser) {
    return <Redirect to="/" />;
  }

  // console.log("loginError", loginError);

  return (
    <Fragment>
      <div className="d-flex flex-column flex-root">
        {/* <!--begin::Login--> */}
        <div
          className="login login-3 login-signin-on d-flex flex-row-fluid"
          id="kt_login"
        >
          <div
            className="d-flex flex-center bgi-size-cover bgi-no-repeat flex-row-fluid"
            style={{ backgroundImage: "url(assets/media/bg/bg-2.jpg)" }}
          >
            <div className="login-form text-center text-white p-7 position-relative overflow-hidden">
              {/* <!--begin::Login Header--> */}
              <div className="d-flex flex-center mb-15">
                <a href="/#">
                  <img
                    src="assets/media/logos/logo-letter-13.png"
                    className="max-h-75px"
                    alt=""
                  />
                </a>
              </div>
              {/* <!--end::Login Header--> */}

              {/* <!--begin::Login Sign in form--> */}
              <div>
                <div className="mb-20">
                  <h3 className="opacity-40 font-weight-normal">
                    Sign In To Admin
                  </h3>
                  <p className="opacity-40">
                    Enter your details to login to your account:
                  </p>
                </div>
                <form
                  className="form"
                  id="kt_login_signin_form"
                  onSubmit={handleSubmit}
                >
                  {loginError && (
                    <div className="fv-plugins-message-container mb-10">
                      <div
                        data-field="password"
                        data-validator="notEmpty"
                        className="fv-help-block"
                      >
                        {loginError.error.message}
                      </div>
                    </div>
                  )}

                  <div className="form-group">
                    <input
                      className="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8"
                      type="text"
                      placeholder="Email"
                      name="email"
                      onChange={handleChange}
                      value={email}
                      autoComplete="off"
                    />
                    <div className="fv-plugins-message-container">
                      <div
                        data-field="email"
                        data-validator="notEmpty"
                        className="fv-help-block"
                      >
                        {errors.email}
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8"
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={handleChange}
                      value={password}
                      autoComplete="off"
                    />
                    <div className="fv-plugins-message-container">
                      <div
                        data-field="password"
                        data-validator="notEmpty"
                        className="fv-help-block"
                      >
                        {errors.password}
                      </div>
                    </div>
                  </div>
                  <div className="form-group d-flex flex-wrap justify-content-between align-items-center px-8 opacity-60">
                    <label className="checkbox checkbox-outline checkbox-white text-white m-0">
                      <input type="checkbox" name="remember" />
                      Remember me
                      <span></span>
                    </label>
                    <Link
                      to="/forgot-password"
                      id="kt_login_forgot"
                      className="text-white font-weight-bold"
                    >
                      Forget Password ?
                    </Link>
                  </div>
                  <div className="form-group text-center mt-10">
                    <button
                      id="kt_login_signin_submit"
                      className="btn btn-pill btn-primary opacity-90 px-15 py-3"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
                <div className="mt-10">
                  <span className="opacity-40 mr-4">
                    Don't have an account yet?
                  </span>
                  <Link
                    to="/signup"
                    id="kt_login_signup"
                    className="text-white opacity-30 font-weight-normal"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
              {/* <!--end::Login Sign in form--> */}
            </div>
          </div>
        </div>
        {/* <!--end::Login--> */}
      </div>
    </Fragment>
  );
};

const mapDisptachToProps = (dispatch) => ({
  loginStart: (email, password) => dispatch(loginStart({ email, password })),
  resetErrors: () => dispatch(resetErrors()),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  loginError: selectLoginError,
});

export default connect(mapStateToProps, mapDisptachToProps)(LoginPage);
