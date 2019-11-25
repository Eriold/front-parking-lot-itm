import axios from "axios";
import { url } from "../constants/serve";

export const contactVisitor = userData => {
  return axios.post(url + "/api/contact", userData);
};
