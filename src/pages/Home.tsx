import { useEffect, useState } from "react";
import useGeolocation from "../hooks/useGeolocation";
import Location from "../types/Location";
import { useGetCurrentWeatherForLocation } from "../hooks/WeatherReportApi";
import WeatherCard from "../components/WeatherCard";
import GetWeatherForLocationResponse from "../types/GetWeatherForLocationResponse";
import styled from "styled-components";

const Home = () => {
  const { locationInfo } = useGeolocation();

  const [thisLocation, setThisLocation] = useState<Location>();

  const { data, isLoading } = useGetCurrentWeatherForLocation(
    thisLocation as Location,
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

  return (
    <Container>
      <Header>
        <Title>Connaître votre météo !</Title>
      </Header>
      {isLoading && !!data ? null : getWeatherCard(data)}
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
