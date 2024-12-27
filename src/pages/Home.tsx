import { useEffect, useState } from "react";
import useGeolocation from "../hooks/useGeolocation";
import Location from "../types/Location";
import {
  useGetCurrentWeatherForCityName,
  useGetCurrentWeatherForLocation,
} from "../hooks/WeatherReportApi";
import WeatherCard from "../components/WeatherCard";
import GetWeatherForLocationResponse from "../types/GetWeatherForLocationResponse";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const { locationInfo } = useGeolocation();

  const [thisLocation, setThisLocation] = useState<Location>();

  const [searchedCity, setSearchedCity] = useState<string>();

  const { data: thisLocationWeather, isLoading: isLoadingThisLocationWeather } =
    useGetCurrentWeatherForLocation(thisLocation as Location);

  const { data: searchedCityWeather } = useGetCurrentWeatherForCityName(
    searchedCity as string,
  );

  useEffect(() => {
    if (!locationInfo) {
      return;
    }

    setThisLocation({
      longitude: locationInfo?.longitude,
      latitude: locationInfo?.latitude,
    });
  }, [locationInfo]);

  const getWeatherCard = (
    weather: GetWeatherForLocationResponse | undefined,
  ) => {
    if (weather === undefined) {
      return null;
    }

    return <WeatherCard weather={weather} />;
  };

  const onSearch = (searchText: string) => {
    setSearchedCity(searchText);
  };

  return (
    <Container>
      <Header>
        <Title>Connaître votre météo !</Title>
      </Header>
      <SearchBar onValidate={onSearch} />
      {isLoadingThisLocationWeather || !thisLocationWeather
        ? null
        : getWeatherCard(thisLocationWeather)}
      {!searchedCityWeather ? null : getWeatherCard(searchedCityWeather)}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding: 0px 30px;
`;

const Header = styled.div`
  padding: 50px 0px;
  text-align: center;
`;

const Title = styled.h1`
  color: #588694;
  font-size: 50px;
`;
