import React from 'react';
import { navigate } from 'gatsby';

var queryText

function Submit() {
  navigate(`/project-search?keywords=${encodeURIComponent(queryText)}`)
}

const SearchForm = ({query}) => {
  return(
    <div className="field has-addons has-addons-centered">
      <div className="control is-expanded">
        <input
          type="text"
          className="input"
          name="search"
          placeholder="Search Here"
          onKeyPress={(e) => {if (e.key === 'Enter') Submit()}}
          onChange={(e) => {queryText = e.target.value}}
        />
      </div>
      <div className="control">
        <button onClick={() => Submit()} className="button is-link">Submit</button>
      </div>
    </div>
  )
};

export default SearchForm