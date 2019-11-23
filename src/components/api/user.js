import axios from "axios";
import { url, config } from "../constants/serve";

export const getData = (callback, errorcallback) => {
  axios
    .get(url, config)
    .then(res => {
      if (callback != null) {
        callback(res);
      }
    })
    .catch(err => {
      if (errorcallback != null) {
        errorcallback(err);
      }
    });
};

// export const getDataId = id =>
//   axios.get(url + id).then(response => response.data);

// export function postUser(data) {
//   url = url + "/home";
//   axios
//     .post(url, data)
//     .then(res => data)
//     .catch(err => console.log(err));
// }

export const userRegister = userData => {
  return axios.post(url + "/home", userData);
};
