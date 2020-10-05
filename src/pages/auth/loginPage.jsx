import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
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
                <form className="form" id="kt_login_signin_form">
                  <div className="form-group">
                    <input
                      className="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8"
                      type="text"
                      placeholder="Email"
                      name="username"
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8"
                      type="password"
                      placeholder="Password"
                      name="password"
                    />
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

export default LoginPage;
