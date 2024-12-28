import Location from "./Location";

export const openWeatherKeys = {
  all: () => ["openWeather"],
  itemLocation: (lang: string, location: Location) => [
    ...openWeatherKeys.all(),
    lang,
    location,
  ],
  itemCity: (lang: string, city: string) => [
    ...openWeatherKeys.all(),
    lang,
    city,
  ],
};
