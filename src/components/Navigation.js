import React, { useState } from 'react';

function Navigation({ updateSearchQuery }) {
  const [querySearch, setQuerySearch] = useState('');

  const pageReload = () => {
    window.location.reload(false);
  };

  const formSubmit = (e) => {
    if (querySearch.length > 0) {
      e.preventDefault();
      updateSearchQuery(querySearch);
      setQuerySearch('');
    }
  };

  return (
    <div className="navigation">
      <img
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
        alt="TMDB logo"
        onClick={pageReload}
      />
      <form onSubmit={formSubmit}>
        <input
          type="text"
          placeholder="Search......"
          onChange={(e) => setQuerySearch(e.target.value)}
          onBlur={(e) => setQuerySearch(e.target.value)}
          value={querySearch}
        />
      </form>
    </div>
  );
}

export default Navigation;
