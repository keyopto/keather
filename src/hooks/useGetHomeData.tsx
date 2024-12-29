import { useEffect, useState } from "react";
import useGeolocation from "./useGeolocation";
import Location from "../types/Location";
import {
  useGetCurrentWeathersForCities,
  useGetCurrentWeatherForLocation,
} from "./WeatherReportApi";
import GetHomeDataReturn from "../types/GetHomeDataReturn";
import { useFavoritesCities } from "./useFavoritesCities";

const useGetHomeData = (): GetHomeDataReturn => {
  const { locationInfo } = useGeolocation();

  const [thisLocation, setThisLocation] = useState<Location>();

  const { favorites, addFavorite } = useFavoritesCities();

  const thisLocationWeather = useGetCurrentWeatherForLocation(
    thisLocation as Location,
  );

  const otherLocationsWeathers = useGetCurrentWeathersForCities(favorites);

  useEffect(() => {
    if (!locationInfo) {
      return;
    }

    setThisLocation({
      longitude: locationInfo?.longitude,
      latitude: locationInfo?.latitude,
    });
  }, [locationInfo]);

  return {
    thisLocationWeather,
    otherLocationsWeathers,
    addLocation: addFavorite,
  };
};

export default useGetHomeData;
