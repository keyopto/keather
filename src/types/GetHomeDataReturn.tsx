import { UseQueryResult } from "@tanstack/react-query";
import GetWeatherForLocationResponse from "./GetWeatherForLocationResponse";

interface GetHomeDataReturn {
  thisLocationWeather: UseQueryResult<GetWeatherForLocationResponse, Error>;
  otherLocationsWeathers: UseQueryResult<
    GetWeatherForLocationResponse,
    Error
  >[];
  addLocation: (city: string) => void;
  removeLocation: (city: string) => void;
}

export default GetHomeDataReturn;
