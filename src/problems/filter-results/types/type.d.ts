export type FilterCategories = {
  location: string;
  priceRange: { min: number; max: number };
  people: number;
};

export type FilterAction = {
  type: "SET_FILTERS" | "RESET";
  payload?: FilterCategories;
};
