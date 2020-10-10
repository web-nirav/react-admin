import React from "react";

import Layout from "../../components/layout/layout";

const HomePage = () => {
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
    </Layout>
  );
};

export default HomePage;
