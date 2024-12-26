interface GetWeatherForLocationResponse {
  name: string; //city
  weather: {
    id: number;
    icon: string;
    main: string;
    description: string;
  }[];
}

export default GetWeatherForLocationResponse;
