import React from 'react';

function Search({ search, setSearch }) { // Changed Search to search to follow camelCase convention
  return (
    <div className="col-sm-6 mb-4">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="search"
          className='form-control'
          role='searchbox'
          placeholder='Search students'
          value={search} // Fixed: Removed the duplicate value attribute
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Search;
