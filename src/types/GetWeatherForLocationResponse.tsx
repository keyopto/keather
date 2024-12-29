interface GetWeatherForLocationResponse {
  name: string; //city
  weather: {
    id: number;
    icon: string;
    main: string;
    description: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
  };
}

export default GetWeatherForLocationResponse;
