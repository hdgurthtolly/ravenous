import React, { useState } from 'react';
import './SearchBar.css';

const sortingOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};

function SearchBar() {
  // Added state variables
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('best_match');

  // Added event handlers
  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSortByChange = (sortByOption) => {
    setSortBy(sortingOptions[sortByOption]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
  };

  // Added helper function
  const getSortByClass = (sortByOption) => {
    return sortingOptions[sortByOption] === sortBy ? 'active' : '';
  };

  return (
    <div className="SearchBar">
      <div className="SearchOptions">
        <div className="SortOptions">
          {Object.keys(sortingOptions).map(optionName => (
            <button 
              key={optionName} 
              className={`SortOption ${getSortByClass(optionName)}`}
              onClick={() => handleSortByChange(optionName)}
            >
              {optionName}
            </button>
          ))}
        </div>
      </div>
      <div className="SearchFields">
        <form onSubmit={handleSubmit}>
          <input 
            placeholder="Search Businesses" 
            value={term}
            onChange={handleTermChange}
          />
          <input 
            placeholder="Where?" 
            value={location}
            onChange={handleLocationChange}
          />
          <button type="submit">Let's Go</button>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;