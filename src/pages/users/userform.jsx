import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import cogoToast from 'cogo-toast';

import { selectLoginError } from "../../redux/user/user.selectors";

const UserForm = ({ onSubmit, loginError }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  let { first_name, last_name, email, password, confirm_password } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      first_name,
      last_name,
      email,
      password,
      confirm_password,
    };

    onSubmit(user);
  };

  useEffect(() => {

    if(loginError){
      cogoToast.error(loginError.error.message, {position: 'top-right'});
    }
  }, [loginError])

  

  return (
    <div className="card card-custom card-stretch">
      {/* <!--begin::Form--> */}
      <form className="form" onSubmit={handleSubmit}>
        {/* <!--begin::Header--> */}
        <div className="card-header py-3">
          <div className="card-title align-items-start flex-column">
            <h3 className="card-label font-weight-bolder text-dark">
              Personal Information
            </h3>
            <span className="text-muted font-weight-bold font-size-sm mt-1">
              Update your personal informaiton
            </span>
          </div>
          <div className="card-toolbar">
            <button type="submit" className="btn btn-success mr-2">
              Save Changes
            </button>
            <button type="reset" className="btn btn-secondary">
              Cancel
            </button>
          </div>
        </div>
        {/* <!--end::Header--> */}

        {/* <!--begin::Body--> */}
        <div className="card-body">
          <div className="row">
            <label className="col-xl-3"></label>
            <div className="col-lg-9 col-xl-6">
              <h5 className="font-weight-bold mb-6">Customer Info</h5>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-xl-3 col-lg-3 col-form-label text-right">
              Avatar
            </label>
            <div className="col-lg-9 col-xl-6">
              <div
                className="image-input image-input-outline"
                id="kt_profile_avatar"
                style={{
                  backgroundImage: "url(assets/media/users/blank.png)",
                }}
              >
                <div
                  className="image-input-wrapper"
                  style={{
                    backgroundImage: "url(assets/media/users/300_21.jpg)",
                  }}
                ></div>
                <label
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="change"
                  data-toggle="tooltip"
                  title=""
                  data-original-title="Change avatar"
                >
                  <i className="fa fa-pen icon-sm text-muted"></i>
                  <input
                    type="file"
                    name="profile_avatar"
                    accept=".png, .jpg, .jpeg"
                  />
                  <input type="hidden" name="profile_avatar_remove" />
                </label>
                <span
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="cancel"
                  data-toggle="tooltip"
                  title="Cancel avatar"
                >
                  <i className="ki ki-bold-close icon-xs text-muted"></i>
                </span>
                <span
                  className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                  data-action="remove"
                  data-toggle="tooltip"
                  title="Remove avatar"
                >
                  <i className="ki ki-bold-close icon-xs text-muted"></i>
                </span>
              </div>
              <span className="form-text text-muted">
                Allowed file types: png, jpg, jpeg.
              </span>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-xl-3 col-lg-3 col-form-label text-right">
              First Name
            </label>
            <div className="col-lg-9 col-xl-6">
              <input
                className="form-control form-control-lg form-control-solid"
                type="text"
                name="first_name"
                value={first_name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-xl-3 col-lg-3 col-form-label text-right">
              Last Name
            </label>
            <div className="col-lg-9 col-xl-6">
              <input
                className="form-control form-control-lg form-control-solid"
                type="text"
                name="last_name"
                value={last_name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-xl-3 col-lg-3 col-form-label text-right">
              Company Name
            </label>
            <div className="col-lg-9 col-xl-6">
              <input
                className="form-control form-control-lg form-control-solid"
                type="text"
              />
              <span className="form-text text-muted">
                If you want your invoices addressed to a company. Leave blank to
                use your full name.
              </span>
            </div>
          </div>
          <div className="row">
            <label className="col-xl-3"></label>
            <div className="col-lg-9 col-xl-6">
              <h5 className="font-weight-bold mt-10 mb-6">Contact Info</h5>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-xl-3 col-lg-3 col-form-label text-right">
              Contact Phone
            </label>
            <div className="col-lg-9 col-xl-6">
              <div className="input-group input-group-lg input-group-solid">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="la la-phone"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control form-control-lg form-control-solid"
                  placeholder="Phone"
                />
              </div>
              <span className="form-text text-muted">
                We'll never share your email with anyone else.
              </span>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-xl-3 col-lg-3 col-form-label text-right">
              Email Address
            </label>
            <div className="col-lg-9 col-xl-6">
              <div className="input-group input-group-lg input-group-solid">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="la la-at"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control form-control-lg form-control-solid"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-xl-3 col-lg-3 col-form-label text-right">
              Password
            </label>
            <div className="col-lg-9 col-xl-6">
              <input
                className="form-control form-control-lg form-control-solid"
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-xl-3 col-lg-3 col-form-label text-right">
              Confirm Password
            </label>
            <div className="col-lg-9 col-xl-6">
              <input
                className="form-control form-control-lg form-control-solid"
                type="password"
                name="confirm_password"
                value={confirm_password}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-xl-3 col-lg-3 col-form-label text-right">
              Company Site
            </label>
            <div className="col-lg-9 col-xl-6">
              <div className="input-group input-group-lg input-group-solid">
                <input
                  type="text"
                  className="form-control form-control-lg form-control-solid"
                  placeholder="Username"
                />
                <div className="input-group-append">
                  <span className="input-group-text">.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--end::Body--> */}
      </form>
      {/* <!--end::Form--> */}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  loginError: selectLoginError,
})

export default connect(mapStateToProps)(UserForm);
