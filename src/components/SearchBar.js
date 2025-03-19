import React from 'react';
import './SearchBar.css';

const sortingOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};

function SearchBar() {
  return (
    <div className="SearchBar">
      <div className="SearchOptions">
        <div className="SortOptions">
          {Object.keys(sortingOptions).map(optionName => (
            <button key={optionName} className="SortOption">
              {optionName}
            </button>
          ))}
        </div>
      </div>
      <div className="SearchFields">
        <form>
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
          <button type="submit">Let's Go</button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;