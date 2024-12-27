import { useEffect, useState } from "react";
import useGeolocation from "./useGeolocation";
import Location from "../types/Location";
import {
  useGetCurrentWeathersForCities,
  useGetCurrentWeatherForLocation,
} from "./WeatherReportApi";
import GetHomeDataReturn from "../types/GetHomeDataReturn";

const useGetHomeData = (): GetHomeDataReturn => {
  const { locationInfo } = useGeolocation();

  const [thisLocation, setThisLocation] = useState<Location>();

  const [otherCities, setOtherCities] = useState<string[]>([]);

  const thisLocationWeather = useGetCurrentWeatherForLocation(
    thisLocation as Location,
  );

  const otherLocationsWeathers = useGetCurrentWeathersForCities(otherCities);

  useEffect(() => {
    if (!locationInfo) {
      return;
    }

    setThisLocation({
      longitude: locationInfo?.longitude,
      latitude: locationInfo?.latitude,
    });
  }, [locationInfo]);

  const addLocation = (city: string) => {
    console.log(city);
    setOtherCities((prev) => {
      return [...prev, city];
    });
  };

  return {
    thisLocationWeather,
    otherLocationsWeathers,
    addLocation,
  };
};

export default useGetHomeData;
