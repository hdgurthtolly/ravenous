import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="SearchBar">
      <div className="SearchOptions">
        <div className="SortOptions">
          <button className="SortOption">Best Match</button>
          <button className="SortOption">Highest Rated</button>
          <button className="SortOption">Most Reviewed</button>
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