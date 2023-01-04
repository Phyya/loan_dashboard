import Axios from "axios";

const baseURL = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/";

const axiosInstance = Axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
