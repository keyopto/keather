import { useQuery } from "@tanstack/react-query";
import { openWeatherKeys } from "../types/apiKeys";
import { getCurrentWeatherForLocation } from "../api/OpenWeatherApi";
import Location from "../types/Location";
import GetWeatherForLocationResponse from "../types/GetWeatherForLocationResponse";

export const useGetCurrentWeatherForLocation = (location: Location) => {
  return useQuery({
    queryKey: openWeatherKeys.item(location),
    queryFn: async (): Promise<GetWeatherForLocationResponse> => {
      const response = await getCurrentWeatherForLocation({
        lat: location.latitude,
        lon: location.longitude,
      });

      return response.data;
    },
    enabled: !!location,
    staleTime: 1000 * 60 * 5,
  });
};
