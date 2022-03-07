import axios from "axios";

const ENDPOINT_PATH = "http://localhost:5000/";

export default {
  register(data) {
    return axios.post(ENDPOINT_PATH + "user", data);
  },

  registerjuridical(data) {
    return axios.post(ENDPOINT_PATH + "juridical", data);
  },

  login(data) {
    return axios.post(ENDPOINT_PATH + "user", data);
  },
};
