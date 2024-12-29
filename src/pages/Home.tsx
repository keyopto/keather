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
      <Block>
        <SubTitle> {t("your_location")}</SubTitle>
        <WeatherCard weatherResult={thisLocationWeather} />
      </Block>
      <Block>
        <SubTitle> {t("other_locations")}</SubTitle>
        <SearchBar onValidate={onSearch} />
        <FavoritesLocationsContainer>
          {otherLocationsWeathers.map((weatherResult) => (
            <WeatherCardContainer>
              <WeatherCard
                weatherResult={weatherResult}
                onClose={onRemoveLocation}
              />
            </WeatherCardContainer>
          ))}
        </FavoritesLocationsContainer>
      </Block>
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
  text-align: center;
`;

const WeatherCardContainer = styled.div`
  width: 31.3%;
`;

const FavoritesLocationsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 3%;
  row-gap: 30px;
`;

const Block = styled.div`
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
