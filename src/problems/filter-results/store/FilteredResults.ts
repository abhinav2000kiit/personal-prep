import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useFilters } from "../context/FilterContext";
import { FilterCategories } from "../types/type";

const getResults = (filters: FilterCategories) => {
  return fetch("/api/search", {
    method: "POST",
    body: JSON.stringify(filters),
  }).then((res) => res.json());
};

const useFilteredResults = () => {
  const { filters } = useFilters();

  const query = useQuery({
    queryKey: ["search", filters],
    queryFn: () => getResults(filters),
    placeholderData: keepPreviousData,
  });

  return {
    results: query.data,
    loading: query.isPending,
  };
};

export { useFilteredResults };
