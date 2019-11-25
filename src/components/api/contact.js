import axios from "axios";
import { url } from "../constants/serve";

export const contactVisitor = contactData => {
  return axios
    .post(url + "/api/contact", contactData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
