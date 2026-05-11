import { createContext, useContext, ReactNode, useReducer } from "react";
import { FilterCategories, FilterAction } from "../types/type";

const initialState: FilterCategories = {
  location: "",
  priceRange: { min: 0, max: 0 },
  people: 0,
};

const FilterContext = createContext<{
  filters: FilterCategories;
  setFilters: (action: FilterAction) => void;
}>({ filters: initialState, setFilters: () => {} });

const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useReducer(
    (state: FilterCategories, action: FilterAction) => {
      switch (action.type) {
        case "SET_FILTERS":
          return {
            ...state,
            ...action.payload,
          };
        case "RESET":
          return initialState;
        default:
          return state;
      }
    },
    initialState,
  );

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilters = () => {
  const ctx = useContext(FilterContext);
  if (!ctx) {
    throw new Error("use inside provider");
  }
  return ctx;
};

export { FilterProvider, useFilters };
