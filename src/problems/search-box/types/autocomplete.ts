import type { KeyboardEvent } from "react";

export type AutocompletePanelProps = {
  searchText: string;
  searchResults: string[];
  activeIndex: number;
  currentSuggestion: string;
  onSearchChange: (value: string) => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  onHoverIndex: (index: number) => void;
  onSelectItem: (item: string) => void;
  getCompletion: (query: string, suggestion: string) => string;
};
