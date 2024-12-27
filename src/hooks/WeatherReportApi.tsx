import { useQuery } from "@tanstack/react-query";
import { openWeatherKeys } from "../types/apiKeys";
import {
  getCurrentWeatherForCity,
  getCurrentWeatherForLocation,
} from "../api/OpenWeatherApi";
import Location from "../types/Location";
import GetWeatherForLocationResponse from "../types/GetWeatherForLocationResponse";

export const useGetCurrentWeatherForLocation = (location: Location) => {
  return useQuery({
    queryKey: openWeatherKeys.itemLocation(location),
    queryFn: async (): Promise<GetWeatherForLocationResponse> => {
      const response = await getCurrentWeatherForLocation({
        lat: location.latitude,
        lon: location.longitude,
      });

      return response.data;
    },
    enabled: !!location,
  });
};

export const useGetCurrentWeatherForCityName = (city: string) => {
  return useQuery({
    queryKey: openWeatherKeys.itemCity(city),
    queryFn: async (): Promise<GetWeatherForLocationResponse> => {
      const response = await getCurrentWeatherForCity(city);

      return response.data;
    },
    enabled: !!city,
  });
};
