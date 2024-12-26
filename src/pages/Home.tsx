import { useEffect, useState } from "react";
import useGeolocation from "../hooks/useGeolocation";
import Location from "../types/Location";
import { useGetCurrentWeatherForLocation } from "../hooks/WeatherReportApi";

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

  return (
    <div>
      <h1>Home</h1>
      {isLoading ? null : <h1>{data?.name}</h1>}
    </div>
  );
};

export default Home;
