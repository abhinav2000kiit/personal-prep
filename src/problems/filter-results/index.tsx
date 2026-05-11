import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Listing from "./components/Listing";
import { FilterProvider } from "./context/FilterContext";

const queryClient = new QueryClient();

const Index = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <FilterProvider>
        <Listing />
      </FilterProvider>
    </QueryClientProvider>
  );
};

export default Index;
