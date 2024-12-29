import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const FavoritesCitiesContext = createContext({
  favorites: [],
  addFavorite: (_city: string) => {},
  removeFavorite: (_city: string) => {},
} as {
  favorites: string[];
  addFavorite: (city: string) => void;
  removeFavorite: (city: string) => void;
});

const KEY_FAVORITES_CITIES_LOCAL_STORAGE = "favorites_cities";

export const FavoritesCitiesProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    const savedFavorites = localStorage.getItem(
      KEY_FAVORITES_CITIES_LOCAL_STORAGE,
    );
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      KEY_FAVORITES_CITIES_LOCAL_STORAGE,
      JSON.stringify(favorites),
    );
  }, [favorites]);

  const addFavorite = (newItem: string) => {
    if (!!favorites.find((city) => city === newItem)) {
      return;
    }

    setFavorites((prev) => {
      return [...prev, newItem];
    });
  };

  const removeFavorite = (newItem: string) => {
    setFavorites((prev) => {
      const index = prev.indexOf(newItem);

      return [...prev.splice(index, 1)];
    });
  };

  return (
    <FavoritesCitiesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoritesCitiesContext.Provider>
  );
};

export const useFavoritesCities = () => {
  const context = useContext(FavoritesCitiesContext);

  if (!context) {
    throw new Error(
      "useFavoritesCities must be used inside a FavoritesCitiesProvider",
    );
  }
  return context;
};
