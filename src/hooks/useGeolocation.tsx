import { useState } from "react";

export interface GeolocationAnswer {
  locationInfo: GeolocationCoordinates | undefined;
  locationError: string | undefined;
}

const useGeolocation = (): GeolocationAnswer => {
  const [locationInfo, setLocationInfo] = useState<GeolocationCoordinates>();
  const [locationError, setLocationError] = useState<string>();

  const successCallback = (position: GeolocationPosition) => {
    setLocationInfo(position.coords);
  };

  const errorCallback = (error: GeolocationPositionError) => {
    setLocationError(error.message);
  };

  if (!locationInfo && !locationError) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }

  return { locationInfo, locationError };
};

export default useGeolocation;
