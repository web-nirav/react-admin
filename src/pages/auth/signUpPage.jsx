import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
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

              {/* <!--begin::Login Sign up form--> */}
              <div>
                <div className="mb-20">
                  <h3 className="opacity-40 font-weight-normal">Sign Up</h3>
                  <p className="opacity-40">
                    Enter your details to create your account
                  </p>
                </div>
                <form className="form text-center" id="kt_login_signup_form">
                  <div className="form-group">
                    <input
                      className="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8"
                      type="text"
                      placeholder="Fullname"
                      name="fullname"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8"
                      type="text"
                      placeholder="Email"
                      name="email"
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
                  <div className="form-group">
                    <input
                      className="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8"
                      type="password"
                      placeholder="Confirm Password"
                      name="cpassword"
                    />
                  </div>
                  <div className="form-group text-left px-8">
                    <label className="checkbox checkbox-outline checkbox-white opacity-60 text-white m-0">
                      <input type="checkbox" name="agree" />I Agree the &nbsp;
                      <a href="/#" className="text-white font-weight-bold">
                        terms and conditions
                      </a>
                      . <span></span>
                    </label>
                    <div className="form-text text-muted text-center"></div>
                  </div>
                  <div className="form-group">
                    <button
                      id="kt_login_signup_submit"
                      className="btn btn-pill btn-primary opacity-90 px-15 py-3 m-2"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
                <div className="mt-10">
                  <span className="opacity-40 mr-4">
                    Already have an account?
                  </span>
                  <Link
                    to="/login"
                    id="kt_login_signup"
                    className="text-white opacity-30 font-weight-normal"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
              {/* <!--end::Login Sign up form--> */}
            </div>
          </div>
        </div>
        {/* <!--end::Login--> */}
      </div>
    </Fragment>
  );
};

export default SignUpPage;
