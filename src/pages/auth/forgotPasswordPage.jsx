import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
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

              {/* <!--begin::Login forgot password form--> */}
              <div>
                <div className="mb-20">
                  <h3 className="opacity-40 font-weight-normal">
                    Forgotten Password ?
                  </h3>
                  <p className="opacity-40">
                    Enter your email to reset your password
                  </p>
                </div>
                <form className="form" id="kt_login_forgot_form">
                  <div className="form-group mb-10">
                    <input
                      className="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8"
                      type="text"
                      placeholder="Email"
                      name="email"
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group">
                    <button
                      id="kt_login_forgot_submit"
                      className="btn btn-pill btn-primary opacity-90 px-15 py-3 m-2"
                    >
                      Request
                    </button>
                  </div>
                </form>
                <div className="mt-10">
                  <span className="opacity-40 mr-4">
                    Already remember password?
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
              {/* <!--end::Login forgot password form--> */}
            </div>
          </div>
        </div>
        {/* <!--end::Login--> */}
      </div>
    </Fragment>
  );
};

export default ForgotPasswordPage;
