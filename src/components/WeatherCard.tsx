import React from "react";
import GetWeatherForLocationResponse from "../types/GetWeatherForLocationResponse";
import styled from "styled-components";
import { UseQueryResult } from "@tanstack/react-query";

const WeatherCard: React.FC<{
  weatherResult: UseQueryResult<GetWeatherForLocationResponse, Error>;
}> = ({ weatherResult }) => {
  const weather = weatherResult.data;

  if (!weather) {
    return null;
  }

  return (
    <Container>
      <Header>
        <Title>{weather.name}</Title>
      </Header>
      <div>
        <h3> {weather.weather[0].main} </h3>
        <p> {weather.weather[0].description} </p>
      </div>
    </Container>
  );
};

export default WeatherCard;

const Container = styled.div`
  border-radius: 10px;
  box-shadow: 12px 12px 3px rgba(0, 0, 255, 0.2);
`;

const Header = styled.div`
  padding: 10px;
  background-color: rgba(170, 70, 0, 1);
`;

const Title = styled.h2`
  padding: 0px;
  margin: 0px;
`;
