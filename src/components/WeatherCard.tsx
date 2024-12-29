import React from "react";
import GetWeatherForLocationResponse from "../types/GetWeatherForLocationResponse";
import styled from "styled-components";
import { UseQueryResult } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

const WeatherCard: React.FC<{
  weatherResult: UseQueryResult<GetWeatherForLocationResponse, Error>;
  onClose?: (city: string) => void;
}> = ({ weatherResult, onClose = null }) => {
  const weather = weatherResult.data;

  const { t } = useTranslation();

  if (!weather) {
    return null;
  }

  const getCloseButton = () => {
    if (!onClose) {
      return;
    }
    return (
      <Close src="images/close.png" onClick={() => onClose(weather.name)} />
    );
  };

  return (
    <Container>
      <Header>{getCloseButton()}</Header>
      <SubContainer>
        <Title>{weather.name}</Title>
        <ContentContainer>
          <WeatherImage
            src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
          />
          <InfoContainer>
            <Temperature> {weather.main.temp} C° </Temperature>
            <FeelsLike>
              {`${t("feels_like")} : `} {weather.main.feels_like} C°
            </FeelsLike>
            <FeelsLike> {weather.weather[0].description} </FeelsLike>
          </InfoContainer>
        </ContentContainer>
      </SubContainer>
    </Container>
  );
};

export default WeatherCard;

const Container = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 12px 12px 3px rgba(0, 0, 255, 0.2);
`;

const Header = styled.div`
  height: 30px;
  background-color: rgba(170, 70, 70, 1);
  padding: 0px 15px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Title = styled.h3`
  padding: 0px;
  margin: 0px;
  font-weight: bold;
  font-size: 20px;
  color: rgba(170, 70, 70, 1);
`;

const SubContainer = styled.div`
  padding: 10px 10px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Close = styled.img`
  cursor: pointer;
  width: 15px;
  height: 15px;
`;

const WeatherImage = styled.img`
  width: 80px;
  height: 80px;
`;

const ContentContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Temperature = styled.p`
  font-weight: bold;
  font-size: 30px;
`;

const FeelsLike = styled.p`
  font-size: 15px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
