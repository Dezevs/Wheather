import * as axios from "axios";

const axiosInstance = axios.create({
    baseURL: `http://api.openweathermap.org/data/2.5`
});
export default axiosInstance;

