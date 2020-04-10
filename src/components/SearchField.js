import React from 'react';
import { navigate } from 'gatsby';

var queryText
var timeout

function SubmitTimeout() {
  if (!!timeout) {
    clearTimeout(timeout)
  } else {
    var searchButton = document.getElementById("searchButton")
    searchButton.classList.add("is-loading")
  }
  timeout = setTimeout(Submit, 1000)
}

function Submit() {
  var path = window.location.pathname;
  navigate(`${path}?keywords=${encodeURIComponent(queryText)}&page=1`)
  var searchButton = document.getElementById("searchButton")
  searchButton.classList.remove("is-loading")
  timeout = undefined
}

const SearchForm = ({query}) => {
  return(
    <div>
      <h1 className="has-text-weight-bold is-size-3 has-text-primary">Search</h1>
      <div className="field has-addons has-addons-centered">
        <div className="control is-expanded">
          <input
            type="text"
            className="input"
            name="search"
            placeholder="Search Here"
            onKeyPress={(e) => {if (e.key === 'Enter') Submit()}}
            onChange={(e) => {queryText = e.target.value; SubmitTimeout()}}
          />
        </div>
        <div className="control">
          <button id="searchButton" onClick={() => Submit()} className="button is-link">Search</button>
        </div>
      </div>
    </div>
  )
};

export default SearchForm