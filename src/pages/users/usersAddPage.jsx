import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import cogoToast from 'cogo-toast';

import { createStructuredSelector } from "reselect";

import Layout from "../../components/layout/layout";
import { addUpdateUserStart } from "../../redux/user/user.actions";
import UserForm from "./userform";
import { selectIsSuccessfulAddUpdate } from "../../redux/user/user.selectors";

const UsersAddPage = ({ addUpdateUser, isSuccessfulAddUpdate }) => {
  const onSubmit = (user) => {
    addUpdateUser(user);
  };

  if (isSuccessfulAddUpdate) {
    cogoToast.success('User added successfully.', {position: 'top-right'});
    return <Redirect to="/users" />;
  }

  return (
    <Layout>
      <div
        className="content d-flex flex-column flex-column-fluid"
        id="kt_content"
      >
        {/* <!--begin::Subheader--> */}
        <div
          className="subheader py-2 py-lg-4 subheader-solid"
          id="kt_subheader"
        >
          <div className="container-fluid d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
            {/* <!--begin::Info--> */}
            <div className="d-flex align-items-center flex-wrap mr-2">
              {/* <!--begin::Page Title--> */}
              <h5 className="text-dark font-weight-bold mt-2 mb-2 mr-5">
                User Management
              </h5>
              {/* <!--end::Page Title--> */}
              {/* <!--begin::Actions--> */}
              <div className="subheader-separator subheader-separator-ver mt-2 mb-2 mr-4 bg-gray-200"></div>
              {/* <!--end::Actions--> */}
            </div>
            {/* <!--end::Info--> */}
          </div>
        </div>
        {/* <!--end::Subheader--> */}
        {/* <!--begin::Entry--> */}
        <div className="d-flex flex-column-fluid">
          {/* <!--begin::Container--> */}
          <div className="container">
            {/* <!--begin::Dashboard--> */}

            {/* <!--begin::Row--> */}
            <div className="row">
              <div className="flex-row-fluid ml-lg-8">
                {/* <!--begin::Card--> */}
                <UserForm onSubmit={onSubmit} />
              </div>
            </div>
            {/* <!--end::Row--> */}
            {/* <!--end::Dashboard--> */}
          </div>
          {/* <!--end::Container--> */}
        </div>
        {/* <!--end::Entry--> */}
      </div>
    </Layout>
  );
};

const mapStateToProps = createStructuredSelector({
  isSuccessfulAddUpdate: selectIsSuccessfulAddUpdate,
});

const mapDispatchToProps = (dispatch) => ({
  addUpdateUser: (user) => dispatch(addUpdateUserStart(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(UsersAddPage);
