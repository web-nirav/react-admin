import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import Pagination from "rc-pagination";

import Layout from "../../components/layout/layout";
import { getUserListStart } from "../../redux/user/user.actions";
import { selectUsersList } from "../../redux/user/user.selectors";

const UsersListPage = ({ usersList, getUserList }) => {
  useEffect(() => {
    getUserList();
  }, [getUserList]);

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
              <div className="col-xl-12">
                {/* <!--begin::Card--> */}
                <div className="card card-custom gutter-b">
                  <div className="card-header">
                    <div className="card-title">
                      <h3 className="card-label">Users List</h3>
                    </div>
                    <div className="card-toolbar">
                      {/* <!--begin::Button--> */}
                      <Link
                        to="/users_create"
                        className="btn btn-primary font-weight-bolder"
                      >
                        <span className="svg-icon svg-icon-md">
                          {/* <!--begin::Svg Icon | path:assets/media/svg/icons/Design/Flatten.svg--> */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x="0" y="0" width="24" height="24"></rect>
                              <circle
                                fill="#000000"
                                cx="9"
                                cy="15"
                                r="6"
                              ></circle>
                              <path
                                d="M8.8012943,7.00241953 C9.83837775,5.20768121 11.7781543,4 14,4 C17.3137085,4 20,6.6862915 20,10 C20,12.2218457 18.7923188,14.1616223 16.9975805,15.1987057 C16.9991904,15.1326658 17,15.0664274 17,15 C17,10.581722 13.418278,7 9,7 C8.93357256,7 8.86733422,7.00080962 8.8012943,7.00241953 Z"
                                fill="#000000"
                                opacity="0.3"
                              ></path>
                            </g>
                          </svg>
                          {/* <!--end::Svg Icon--> */}
                        </span>
                        Add New User
                      </Link>
                      {/* <!--end::Button--> */}
                    </div>
                  </div>
                  <div className="card-body">
                    {/* <!--begin::Example--> */}
                    <div className="example mb-10">
                      <div className="example-preview">
                        <table className="table table-bordered table-hover">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">First Name</th>
                              <th scope="col">Last Name</th>
                              <th scope="col">Email</th>
                              <th scope="col" width="15%">
                                Status
                              </th>
                              <th scope="col" width="15%">
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {!usersList && (
                              <tr>
                                <td colSpan="6" align="center">
                                  Loading...
                                </td>
                              </tr>
                            )}
                            {usersList &&
                              usersList.data.map((user) => (
                                <tr key={user.id}>
                                  <th scope="row">{user.id}</th>
                                  <td>{user.first_name}</td>
                                  <td>{user.last_name}</td>
                                  <td>{user.email}</td>
                                  <td>
                                    <span
                                      className={
                                        "label label-inline font-weight-bold label-light-" +
                                        (user.status === "Active"
                                          ? "success"
                                          : "danger")
                                      }
                                    >
                                      {user.status}
                                    </span>
                                  </td>
                                  <td>
                                    <span
                                      style={{
                                        overflow: "visible",
                                        position: "relative",
                                        width: "130px",
                                      }}
                                    >
                                      <a
                                        href="/"
                                        className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2"
                                        title="Edit details"
                                      >
                                        <span className="svg-icon svg-icon-md">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            width="24px"
                                            height="24px"
                                            viewBox="0 0 24 24"
                                            version="1.1"
                                          >
                                            <g
                                              stroke="none"
                                              strokeWidth="1"
                                              fill="none"
                                              fillRule="evenodd"
                                            >
                                              <rect
                                                x="0"
                                                y="0"
                                                width="24"
                                                height="24"
                                              ></rect>
                                              <path
                                                d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
                                                fill="#000000"
                                                fillRule="nonzero"
                                                transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) "
                                              ></path>
                                              <path
                                                d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
                                                fill="#000000"
                                                fillRule="nonzero"
                                                opacity="0.3"
                                              ></path>
                                            </g>
                                          </svg>
                                        </span>
                                      </a>
                                      <a
                                        href="/"
                                        className="btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon"
                                        title="Delete"
                                      >
                                        <span className="svg-icon svg-icon-md">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            width="24px"
                                            height="24px"
                                            viewBox="0 0 24 24"
                                            version="1.1"
                                          >
                                            <g
                                              stroke="none"
                                              strokeWidth="1"
                                              fill="none"
                                              fillRule="evenodd"
                                            >
                                              <rect
                                                x="0"
                                                y="0"
                                                width="24"
                                                height="24"
                                              ></rect>
                                              <path
                                                d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                                                fill="#000000"
                                                fillRule="nonzero"
                                              ></path>
                                              <path
                                                d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                                                fill="#000000"
                                                opacity="0.3"
                                              ></path>
                                            </g>
                                          </svg>
                                        </span>
                                      </a>
                                    </span>
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                        {usersList && (
                          <Pagination
                            className={
                              usersList.total > 15 ? "max-pagination" : ""
                            }
                            showLessItems
                            pageSize={usersList.per_page}
                            current={usersList.current_page}
                            total={usersList.total}
                            onChange={(e) => getUserList(e)}
                            locale={true}
                          />
                        )}
                      </div>
                    </div>
                    {/* <!--end::Example--> */}
                  </div>
                </div>
                {/* <!--end::Card--> */}
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

const mapDispatchToProps = (dispatch) => ({
  getUserList: (e) => {
    return dispatch(getUserListStart(e));
  },
});

const mapStateToProps = createStructuredSelector({
  usersList: selectUsersList,
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersListPage);
