import Location from "./Location";

export const openWeatherKeys = {
  all: () => ["openWeather"],
  itemLocation: (location: Location) => [...openWeatherKeys.all(), location],
  itemCity: (city: string) => [...openWeatherKeys.all(), city],
};
