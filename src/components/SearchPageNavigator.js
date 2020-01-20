import React from 'react';
import { navigate } from 'gatsby';

function gotoPage(query, page) {
  navigate(`/project-search?keywords=${encodeURIComponent(query)}&page=${page}`)
}

const SearchPageNavigator = ({pages, currPage, query}) => {

  const pageButtons = []
  for (var i = 1; i <= pages; i++) {
    if (i === currPage) {
      pageButtons.push(
        <p className="control">
          <button className="button is-light" disabled>
            <span><u>{i}</u></span>
          </button>
        </p>
      )
    } else {
      pageButtons.push(
        <p className="control">
          <button className="button is-light">
            <span>{i}</span>
          </button>
        </p>
      )
    }
  }

  return (
    <div className="field has-addons has-addons-centered is-centered">
      <p className="control">
        {currPage === 1 ? (
          <button className="button is-link is-light" disabled>
            <span>Back</span>
          </button>
          ) : (
          <button className="button is-link is-light" onClick={() => gotoPage(query, currPage - 1)}>
            <span>Back</span>
          </button>
        )}
      </p>
      {pageButtons}
      <p className="control">
        {currPage === pages ? (
          <button className="button is-link is-light" disabled>
            <span>Next</span>
          </button>
          ) : (
          <button className="button is-link is-light" onClick={() => gotoPage(query, currPage + 1)}>
            <span>Next</span>
          </button>
        )}
      </p>
    </div>
  )
};

export default SearchPageNavigator
