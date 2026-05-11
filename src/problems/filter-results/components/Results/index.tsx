import { useFilteredResults } from "../../store/FilteredResults";

const Index = () => {
  const { results, loading } = useFilteredResults();

  return loading ? (
    <div>loading...</div>
  ) : (
    <div>Results: {JSON.stringify(results)}</div>
  );
};

export default Index;
