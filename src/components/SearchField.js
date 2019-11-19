import React from 'react';
import { navigate } from 'gatsby';

const SearchForm = ({query}) => (
  <div className="field">
    <div className="control">
      <input
        type="text"
        className="input"
        placeholder="Search Here"
        onChange={(e) => navigate(`/project-search?keywords=${encodeURIComponent(e.target.value)}`)}
        value={query}
      />
    </div>
  </div>
);

export default SearchForm