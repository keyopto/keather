import WeatherCard from "../components/WeatherCard";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import useGetHomeData from "../hooks/useGetHomeData";

const Home = () => {
  const { thisLocationWeather, otherLocationsWeathers, addLocation } =
    useGetHomeData();

  console.log(otherLocationsWeathers);

  const onSearch = (searchText: string) => {
    addLocation(searchText);
  };

  return (
    <Container>
      <Header>
        <Title>Connaître votre météo !</Title>
      </Header>
      <SearchBar onValidate={onSearch} />
      <WeatherCard weatherResult={thisLocationWeather} />
      {otherLocationsWeathers.map((weatherResult) => (
        <WeatherCard weatherResult={weatherResult} />
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
