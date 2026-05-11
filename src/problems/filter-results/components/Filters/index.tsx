import { useFilters } from "../../context/FilterContext";

const Index = () => {
  const { setFilters } = useFilters();

  return (
    <div>
      Filters
      <button
        onClick={() =>
          setFilters({
            type: "SET_FILTERS",
            payload: {
              location: "New York",
              priceRange: { min: 0, max: 1000 },
              people: 1,
            },
          })
        }
      >
        Set Filters
      </button>
      <button
        onClick={() =>
          setFilters({
            type: "RESET",
          })
        }
      >
        Reset Filters
      </button>
    </div>
  );
};

export default Index;
