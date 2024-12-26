import Location from "./Location";

export const openWeatherKeys = {
  all: () => ["openWeather"],
  item: (location: Location) => [...openWeatherKeys.all(), location],
};
