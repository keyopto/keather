import axios from "axios";
import Config from "../Config";
import GetWeatherForLocationRequest from "../types/GetWeatherForLocationRequest";
import GetWeatherForCityRequest from "../types/GetWeatherForCityRequest";

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
      units: "metric",
    },
  });
};

export const getCurrentWeatherForCity = (params: GetWeatherForCityRequest) => {
  return axiosInstance.get("/weather", {
    params: {
      ...params,
      appid: import.meta.env.VITE_OPEN_WEATHER_API_KEY,
      units: "metric",
    },
  });
};
