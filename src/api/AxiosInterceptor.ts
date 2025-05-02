import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://www.omdbapi.com/",
  params: {
    apikey: "af5f8aa7",
    i: "tt3896198",
  },
  timeout: 10000,
});
axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.request) {
      error.message = "No response from server";
    } else {
      error.message = "Request setup error";
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
