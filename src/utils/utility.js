import axios from "axios";
import config from "../config/configs";

let apiBaseUrl = config.API_BASE_URL;
let appToken = config.APP_TOKEN;

export const commonApi = (
  url,
  data,
  method,
  isAuthorized = false,
  dispatchType = null,
  isForm = false
) => {
  url = apiBaseUrl + url;

  let headers = { "Content-Type": "application/json" };

  let token = localStorage.getItem("auth_token")
    ? localStorage.getItem("auth_token")
    : "";

  headers.app_token = appToken;

  if (isAuthorized) {
    headers.Authorization = "Bearer " + token;
  }

  if (isForm) {
    headers["Content-Type"] = "multipart/form-data";
  }

  //   document.getElementById("pre-loader").style.display = "flex";

  return new Promise((resolve, reject) => {
    axios({ method, url, headers, data })
      .then((response) => {
        // document.getElementById("pre-loader").style.display = "none";
        if (url.includes("users/login") && response === undefined) {
          resolve(response);
        }
        if (response && response.status === 422) {
          let Data = { data: response.data, status: response.status };
          resolve(Data);
        }
        if (response && response.status === 200) {
          let Data = { data: response.data, status: response.status };
          resolve(Data);
        }
        if (response && response.status === 201) {
          let Data = { data: response.data, status: response.status };
          resolve(Data);
        }
        if (response && response.status === 401) {
          let Data = { data: response.data, status: response.status };
          resolve(Data);
        }
        if (response && response.status === 400) {
          let Data = { data: response.data, status: response.status };
          resolve(Data);
        } else if (response && response.status === 404) {
          let Data = { data: response.data, status: response.status };
          resolve(Data);
        } else {
          //  showErrorToast("Something went wrong...! ")
        }
      })
      .catch((error) => {
        console.log("error is ", error);
        reject(error);
      });
  });
};
