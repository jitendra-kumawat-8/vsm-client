import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "http://54.153.39.43:84/api", // Base URL for the APIs
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle response errors globally
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  },
);

export default axiosInstance;
