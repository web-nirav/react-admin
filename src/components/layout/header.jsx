import React, { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <div id="kt_header" className="header header-fixed">
        {/* <!--begin::Container--> */}
        <div className="container-fluid d-flex align-items-stretch justify-content-between">
          <div
            className="header-menu-wrapper header-menu-wrapper-left"
            id="kt_header_menu_wrapper"
          ></div>
          {/* <!--begin::Topbar--> */}
          <div className="topbar">
            {/* <!--begin::Notifications--> */}
            <div className="dropdown">
              {/* <!--begin::Toggle--> */}
              <div
                className="topbar-item"
                data-toggle="dropdown"
                data-offset="10px,0px"
              >
                <div className="btn btn-icon btn-clean btn-dropdown btn-lg mr-1 pulse pulse-primary">
                  <span className="svg-icon svg-icon-xl svg-icon-primary">
                    {/* <!--begin::Svg Icon | path:assets/media/svg/icons/Code/Compiling.svg--> */}
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
                        <rect x="0" y="0" width="24" height="24" />
                        <path
                          d="M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z"
                          fill="#000000"
                          opacity="0.3"
                        />
                        <path
                          d="M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z"
                          fill="#000000"
                        />
                      </g>
                    </svg>
                    {/* <!--end::Svg Icon--> */}
                  </span>
                  <span className="pulse-ring"></span>
                </div>
              </div>
              {/* <!--end::Toggle--> */}
              {/* <!--begin::Dropdown--> */}
              <div className="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-lg">
                <form>
                  {/* <!--begin::Header--> */}
                  <div
                    className="d-flex flex-column pt-12 bgi-size-cover bgi-no-repeat rounded-top"
                    style={{
                      backgroundImage: "url(assets/media/misc/bg-1.jpg)",
                    }}
                  >
                    {/* <!--begin::Title--> */}
                    <h4 className="d-flex flex-center rounded-top">
                      <span className="text-white">User Notifications</span>
                      <span className="btn btn-text btn-success btn-sm font-weight-bold btn-font-md ml-2">
                        23 new
                      </span>
                    </h4>
                    {/* <!--end::Title--> */}
                    {/* <!--begin::Tabs--> */}
                    <ul
                      className="nav nav-bold nav-tabs nav-tabs-line nav-tabs-line-3x nav-tabs-line-transparent-white nav-tabs-line-active-border-success mt-3 px-8"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active show"
                          data-toggle="tab"
                          href="#topbar_notifications_events"
                        >
                          Events
                        </a>
                      </li>
                    </ul>
                    {/* <!--end::Tabs--> */}
                  </div>
                  {/* <!--end::Header--> */}
                  {/* <!--begin::Content--> */}
                  <div className="tab-content">
                    {/* <!--begin::Tabpane--> */}
                    <div
                      className="tab-pane active show p-8"
                      id="topbar_notifications_events"
                      role="tabpanel"
                    >
                      {/* <!--begin::Nav--> */}
                      <div
                        className="navi navi-hover scroll my-4"
                        data-scroll="true"
                        data-height="300"
                        data-mobile-height="200"
                      >
                        {/* <!--begin::Item--> */}
                        <a href="/" className="navi-item">
                          <div className="navi-link">
                            <div className="navi-icon mr-2">
                              <i className="flaticon2-line-chart text-success"></i>
                            </div>
                            <div className="navi-text">
                              <div className="font-weight-bold">
                                New report has been received
                              </div>
                              <div className="text-muted">23 hrs ago</div>
                            </div>
                          </div>
                        </a>
                        {/* <!--end::Item--> */}
                        {/* <!--begin::Item--> */}
                        <a href="/" className="navi-item">
                          <div className="navi-link">
                            <div className="navi-icon mr-2">
                              <i className="flaticon2-paper-plane text-danger"></i>
                            </div>
                            <div className="navi-text">
                              <div className="font-weight-bold">
                                Finance report has been generated
                              </div>
                              <div className="text-muted">25 hrs ago</div>
                            </div>
                          </div>
                        </a>
                        {/* <!--end::Item--> */}
                        {/* <!--begin::Item--> */}
                        <a href="/" className="navi-item">
                          <div className="navi-link">
                            <div className="navi-icon mr-2">
                              <i className="flaticon2-user flaticon2-line- text-success"></i>
                            </div>
                            <div className="navi-text">
                              <div className="font-weight-bold">
                                New order has been received
                              </div>
                              <div className="text-muted">2 hrs ago</div>
                            </div>
                          </div>
                        </a>
                        {/* <!--end::Item--> */}
                        {/* <!--begin::Item--> */}
                        <a href="/" className="navi-item">
                          <div className="navi-link">
                            <div className="navi-icon mr-2">
                              <i className="flaticon2-pin text-primary"></i>
                            </div>
                            <div className="navi-text">
                              <div className="font-weight-bold">
                                New customer is registered
                              </div>
                              <div className="text-muted">3 hrs ago</div>
                            </div>
                          </div>
                        </a>
                        {/* <!--end::Item--> */}
                        {/* <!--begin::Item--> */}
                        <a href="/" className="navi-item">
                          <div className="navi-link">
                            <div className="navi-icon mr-2">
                              <i className="flaticon2-sms text-danger"></i>
                            </div>
                            <div className="navi-text">
                              <div className="font-weight-bold">
                                Application has been approved
                              </div>
                              <div className="text-muted">3 hrs ago</div>
                            </div>
                          </div>
                        </a>
                        {/* <!--end::Item--> */}
                        {/* <!--begin::Item--> */}
                        <a href="/" className="navi-item">
                          <div className="navi-link">
                            <div className="navi-icon mr-2">
                              <i className="flaticon2-pie-chart-3 text-warning"></i>
                            </div>
                            <div className="navinavinavi-text">
                              <div className="font-weight-bold">
                                New file has been uploaded
                              </div>
                              <div className="text-muted">5 hrs ago</div>
                            </div>
                          </div>
                        </a>
                        {/* <!--end::Item--> */}
                        {/* <!--begin::Item--> */}
                        <a href="/" className="navi-item">
                          <div className="navi-link">
                            <div className="navi-icon mr-2">
                              <i className="flaticon-pie-chart-1 text-info"></i>
                            </div>
                            <div className="navi-text">
                              <div className="font-weight-bold">
                                New user feedback received
                              </div>
                              <div className="text-muted">8 hrs ago</div>
                            </div>
                          </div>
                        </a>
                        {/* <!--end::Item--> */}
                        {/* <!--begin::Item--> */}
                        <a href="/" className="navi-item">
                          <div className="navi-link">
                            <div className="navi-icon mr-2">
                              <i className="flaticon2-settings text-success"></i>
                            </div>
                            <div className="navi-text">
                              <div className="font-weight-bold">
                                System reboot has been successfully completed
                              </div>
                              <div className="text-muted">12 hrs ago</div>
                            </div>
                          </div>
                        </a>
                        {/* <!--end::Item--> */}
                        {/* <!--begin::Item--> */}
                        <a href="/" className="navi-item">
                          <div className="navi-link">
                            <div className="navi-icon mr-2">
                              <i className="flaticon-safe-shield-protection text-primary"></i>
                            </div>
                            <div className="navi-text">
                              <div className="font-weight-bold">
                                New order has been placed
                              </div>
                              <div className="text-muted">15 hrs ago</div>
                            </div>
                          </div>
                        </a>
                        {/* <!--end::Item--> */}
                        {/* <!--begin::Item--> */}
                        <a href="/" className="navi-item">
                          <div className="navi-link">
                            <div className="navi-icon mr-2">
                              <i className="flaticon2-notification text-primary"></i>
                            </div>
                            <div className="navi-text">
                              <div className="font-weight-bold">
                                Company meeting canceled
                              </div>
                              <div className="text-muted">19 hrs ago</div>
                            </div>
                          </div>
                        </a>
                        {/* <!--end::Item--> */}
                        {/* <!--begin::Item--> */}
                        <a href="/" className="navi-item">
                          <div className="navi-link">
                            <div className="navi-icon mr-2">
                              <i className="flaticon2-fax text-success"></i>
                            </div>
                            <div className="navi-text">
                              <div className="font-weight-bold">
                                New report has been received
                              </div>
                              <div className="text-muted">23 hrs ago</div>
                            </div>
                          </div>
                        </a>
                        {/* <!--end::Item--> */}
                        {/* <!--begin::Item--> */}
                        <a href="/" className="navi-item">
                          <div className="navi-link">
                            <div className="navi-icon mr-2">
                              <i className="flaticon-download-1 text-danger"></i>
                            </div>
                            <div className="navi-text">
                              <div className="font-weight-bold">
                                Finance report has been generated
                              </div>
                              <div className="text-muted">25 hrs ago</div>
                            </div>
                          </div>
                        </a>
                        {/* <!--end::Item--> */}
                        {/* <!--begin::Item--> */}
                        <a href="/" className="navi-item">
                          <div className="navi-link">
                            <div className="navi-icon mr-2">
                              <i className="flaticon-security text-warning"></i>
                            </div>
                            <div className="navi-text">
                              <div className="font-weight-bold">
                                New customer comment recieved
                              </div>
                              <div className="text-muted">2 days ago</div>
                            </div>
                          </div>
                        </a>
                        {/* <!--end::Item--> */}
                        {/* <!--begin::Item--> */}
                        <a href="/" className="navi-item">
                          <div className="navi-link">
                            <div className="navi-icon mr-2">
                              <i className="flaticon2-analytics-1 text-success"></i>
                            </div>
                            <div className="navi-text">
                              <div className="font-weight-bold">
                                New customer is registered
                              </div>
                              <div className="text-muted">3 days ago</div>
                            </div>
                          </div>
                        </a>
                        {/* <!--end::Item--> */}
                      </div>
                      {/* <!--end::Nav--> */}
                    </div>
                    {/* <!--end::Tabpane--> */}
                  </div>
                  {/* <!--end::Content--> */}
                </form>
              </div>
              {/* <!--end::Dropdown--> */}
            </div>
            {/* <!--end::Notifications--> */}

            {/* <!--begin::User--> */}
            <div className="topbar-item">
              <div
                className="btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2"
                id="kt_quick_user_toggle"
              >
                <span className="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1">
                  Hi,
                </span>
                <span className="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3">
                  Nilu
                </span>
                <span className="symbol symbol-35 symbol-light-success">
                  <span className="symbol-label font-size-h5 font-weight-bold">
                    S
                  </span>
                </span>
              </div>
            </div>
            {/* <!--end::User--> */}
          </div>
          {/* <!--end::Topbar--> */}
        </div>
        {/* <!--end::Container--> */}
      </div>
    </Fragment>
  );
};

export default Header;
