import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import AppRouter from "./router/AppRouter";
import "./i18.ts";
import { FavoritesCitiesProvider } from "./hooks/useFavoritesCities.tsx";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <FavoritesCitiesProvider>
        <AppRouter />
      </FavoritesCitiesProvider>
    </QueryClientProvider>
  );
}

export default App;
