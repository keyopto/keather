import WeatherCard from "../components/WeatherCard";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import useGetHomeData from "../hooks/useGetHomeData";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  const {
    thisLocationWeather,
    otherLocationsWeathers,
    addLocation,
    removeLocation,
  } = useGetHomeData();

  const onSearch = (searchText: string) => {
    addLocation(searchText);
  };

  const onRemoveLocation = (city: string) => {
    removeLocation(city);
  };

  return (
    <Container>
      <Header>
        <Title>{t("welcome_home")}</Title>
      </Header>
      <SubTitle> {t("your_location")}</SubTitle>
      <WeatherCard weatherResult={thisLocationWeather} />
      <SearchBar onValidate={onSearch} />
      {otherLocationsWeathers.map((weatherResult) => (
        <WeatherCard weatherResult={weatherResult} onClose={onRemoveLocation} />
      ))}
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

const SubTitle = styled.h2`
  font-weight: bold;
  font-size: 25px;
  padding: 10px 25px;
`;
