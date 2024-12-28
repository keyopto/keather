import { useQueries, useQuery } from "@tanstack/react-query";
import { openWeatherKeys } from "../types/apiKeys";
import {
  getCurrentWeatherForCity,
  getCurrentWeatherForLocation,
} from "../api/OpenWeatherApi";
import Location from "../types/Location";
import GetWeatherForLocationResponse from "../types/GetWeatherForLocationResponse";
import { useTranslation } from "react-i18next";

export const useGetCurrentWeatherForLocation = (location: Location) => {
  const { i18n } = useTranslation();

  const language = i18n.language;

  return useQuery({
    queryKey: openWeatherKeys.itemLocation(language, location),
    queryFn: async (): Promise<GetWeatherForLocationResponse> => {
      const response = await getCurrentWeatherForLocation({
        lat: location.latitude,
        lon: location.longitude,
        lang: language,
      });

      return response.data;
    },
    enabled: !!location,
  });
};

export const useGetCurrentWeathersForCities = (cities: string[]) => {
  const { i18n } = useTranslation();

  const language = i18n.language;

  return useQueries({
    queries: cities.map((city: string) => ({
      queryKey: openWeatherKeys.itemCity(language, city),
      queryFn: async (): Promise<GetWeatherForLocationResponse> => {
        const response = await getCurrentWeatherForCity({
          q: city,
          lang: language,
        });

        return response.data;
      },
      enabled: !!city,
    })),
  });
};
