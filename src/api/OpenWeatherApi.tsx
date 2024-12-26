import axios from "axios";
import Config from "../Config";
import GetWeatherForLocationRequest from "../types/GetWeatherForLocationRequest";

const axiosInstance = axios.create({
  baseURL: Config.weatherUrl,
});

export const getCurrentWeatherForLocation = (
  params: GetWeatherForLocationRequest,
) => {
  return axiosInstance.get("/weather", {
    params: {
      ...params,
      appid: import.meta.env.VITE_OPEN_WEATHER_API_KEY,
      lang: "fr",
    },
  });
};
