import React, { Fragment } from "react";
import Aside from "./aside";
import Footer from "./footer";
import Header from "./header";
import ScrollTop from "./scrollTop";
import UserPanel from "./userPanel";

const Layout = ({ children }) => {
  return (
    <Fragment>
      {/* <!--begin::Header Mobile--> */}
      <div
        id="kt_header_mobile"
        className="header-mobile align-items-center header-mobile-fixed"
      >
        {/* <!--begin::Logo--> */}
        <a href="index.html">
          <img alt="Logo" src="assets/media/logos/logo-light.png" />
        </a>
        {/* <!--end::Logo--> */}

        {/* <!--begin::Toolbar--> */}
        <div className="d-flex align-items-center">
          {/* <!--begin::Aside Mobile Toggle--> */}
          <button
            className="btn p-0 burger-icon burger-icon-left"
            id="kt_aside_mobile_toggle"
          >
            <span></span>
          </button>
          {/* <!--end::Aside Mobile Toggle--> */}

          {/* <!--begin::Topbar Mobile Toggle--> */}
          <button
            className="btn btn-hover-text-primary p-0 ml-2"
            id="kt_header_mobile_topbar_toggle"
          >
            <span className="svg-icon svg-icon-xl">
              {/* <!--begin::Svg Icon | path:assets/media/svg/icons/General/User.svg--> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
              >
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <polygon points="0 0 24 0 24 24 0 24" />
                  <path
                    d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z"
                    fill="#000000"
                    fillRule="nonzero"
                    opacity="0.3"
                  />
                  <path
                    d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z"
                    fill="#000000"
                    fillRule="nonzero"
                  />
                </g>
              </svg>
              {/* <!--end::Svg Icon--> */}
            </span>
          </button>
          {/* <!--end::Topbar Mobile Toggle--> */}
        </div>
        {/* <!--end::Toolbar--> */}
      </div>
      {/* <!--end::Header Mobile--> */}
      <div className="d-flex flex-column flex-root">
        {/* <!--begin::Page--> */}
        <div className="d-flex flex-row flex-column-fluid page">
          {/* <!--begin::Aside--> */}
          <Aside />
          {/* <!--end::Aside--> */}

          {/* <!--begin::Wrapper--> */}
          <div
            className="d-flex flex-column flex-row-fluid wrapper"
            id="kt_wrapper"
          >
            {/* <!--begin::Header--> */}
            <Header />
            {/* <!--end::Header--> */}

            {/* <!--begin::Content--> */}
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
                      Header Dark
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
                    <div className="col-lg-4">
                      {/* <!--begin::Mixed Widget 14--> */}
                      <div className="card card-custom card-stretch gutter-b">
                        {/* <!--begin::Header--> */}
                        <div className="card-header border-0 pt-5">
                          <h3 className="card-title font-weight-bolder">
                            Action Needed
                          </h3>
                        </div>
                        {/* <!--end::Header--> */}
                        {/* <!--begin::Body--> */}
                        <div className="card-body d-flex flex-column">
                          <div className="flex-grow-1">
                            <div
                              id="kt_mixed_widget_14_chart"
                              style={{ height: "200px" }}
                            ></div>
                          </div>
                          <div className="pt-5">
                            <p className="text-center font-weight-normal font-size-lg pb-7">
                              Notes: Current sprint requires stakeholders <br />
                              to approve newly amended policies
                            </p>
                            <a
                              href="/"
                              className="btn btn-success btn-shadow-hover font-weight-bolder w-100 py-3"
                            >
                              Generate Report
                            </a>
                          </div>
                        </div>
                        {/* <!--end::Body--> */}
                      </div>
                      {/* <!--end::Mixed Widget 14--> */}
                    </div>
                  </div>
                  {/* <!--end::Row--> */}
                  {/* <!--end::Dashboard--> */}
                </div>
                {/* <!--end::Container--> */}
              </div>
              {/* <!--end::Entry--> */}
            </div>
            {/* <!--end::Content--> */}

            {/* <!--begin::Footer--> */}
            <Footer />
            {/* <!--end::Footer--> */}
          </div>
          {/* <!--end::Wrapper--> */}
        </div>
        {/* <!--end::Page--> */}
      </div>
      {/* <!--end::Main--> */}

      {/* <!-- begin::User Panel--> */}
      <UserPanel />
      {/* <!-- end::User Panel--> */}

      {/* <!--begin::Scrolltop--> */}
      <ScrollTop />
      {/* <!--end::Scrolltop--> */}
    </Fragment>
  );
};

export default Layout;
