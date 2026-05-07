import { useState } from "react";
import type { KeyboardEvent } from "react";
import { Link } from "react-router-dom";
import { SUGGESTIONS } from "./constants/suggestions";
import { AutocompletePanel } from "./components/AutocompletePanel";
import "./styles.css";

export default function SearchBoxPage() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const currentSuggestion =
    activeIndex >= 0 ? searchResults[activeIndex] : searchResults[0] || "";

  const handleSearch = (str: string) => {
    setSearchText(str);
    setActiveIndex(-1);

    if (str) {
      const filtered = SUGGESTIONS.filter((s) =>
        s.toLowerCase().startsWith(str.toLowerCase()),
      );
      setSearchResults([...filtered]);
    } else {
      setSearchResults([]);
    }
  };

  const getCompletion = (query: string, suggestion: string) => {
    if (!suggestion.toLowerCase().startsWith(query.toLowerCase())) {
      return "";
    }
    return suggestion.slice(query.length);
  };

  const selectItem = (item: string) => {
    setSearchText(item);
    setSearchResults([]);
    setActiveIndex(-1);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!searchResults.length) return;

    if (e.key === "Tab" && currentSuggestion) {
      e.preventDefault();
      selectItem(currentSuggestion);
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex((prev) => {
          const next = prev + 1;
          return next >= searchResults.length ? 0 : next;
        });
        break;

      case "ArrowUp":
        e.preventDefault();
        setActiveIndex((prev) => {
          const next = prev - 1;
          return next < -1 ? searchResults.length - 1 : next;
        });
        break;

      case "Enter":
        if (activeIndex >= 0) {
          e.preventDefault();
          selectItem(searchResults[activeIndex]);
        }
        break;

      case "Escape":
        setActiveIndex(-1);
        break;

      default:
        break;
    }
  };

  return (
    <div className="search-box">
      <p>
        <Link to="/">← Home</Link>
      </p>
      <h1>Searchbox</h1>

      <AutocompletePanel
        searchText={searchText}
        searchResults={searchResults}
        activeIndex={activeIndex}
        currentSuggestion={currentSuggestion}
        onSearchChange={handleSearch}
        onKeyDown={handleKeyDown}
        onHoverIndex={setActiveIndex}
        onSelectItem={selectItem}
        getCompletion={getCompletion}
      />
    </div>
  );
}
