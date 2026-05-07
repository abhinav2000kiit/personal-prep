import type { AutocompletePanelProps } from "../types";

export function AutocompletePanel({
  searchText,
  searchResults,
  activeIndex,
  currentSuggestion,
  onSearchChange,
  onKeyDown,
  onHoverIndex,
  onSelectItem,
  getCompletion,
}: AutocompletePanelProps) {
  return (
    <>
      <div className="search-box__wrapper">
        <input
          className="search-box__input"
          value={searchText}
          onChange={(e) => onSearchChange(e.target.value)}
          onKeyDown={onKeyDown}
        />

        <div className="search-box__ghost">
          {searchText}
          <span className="search-box__completion">
            {getCompletion(searchText, currentSuggestion)}
          </span>
        </div>
      </div>

      <div className="search-box__dropdown">
        {searchResults.map((sr, index) => (
          <div
            key={sr}
            className={`search-box__item ${
              index === activeIndex ? "search-box__item--active" : ""
            }`}
            onMouseEnter={() => onHoverIndex(index)}
            onClick={() => onSelectItem(sr)}
            role="option"
            aria-selected={index === activeIndex}
          >
            {sr}
          </div>
        ))}
      </div>
    </>
  );
}
