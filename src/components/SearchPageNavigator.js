import React from 'react';
import { navigate } from 'gatsby';

function gotoPage(query, page) {
  navigate(`/browse?keywords=${encodeURIComponent(query)}&page=${page}`)
}

const SearchPageNavigator = ({pages, currPage, query}) => {

  const pageNums = [];
  const pagePadding = 2;
  const maxPages = (pagePadding * 2) + 1;

  if (pages <= maxPages) {  // No truncation needed
    for (var i = 1; i <= pages; i++) {
      pageNums.push(i);
    }
  } else if (currPage >= pages - pagePadding) { // End of truncation
    for (i = pages - maxPages + 1; i <= pages; i++) {
      pageNums.push(i);
    }
  } else if (currPage <= pagePadding) { // Beginning of truncation
    for (i = 1; i <= maxPages; i++) {
      pageNums.push(i);
    }
  } else {  // Full truncation
    for (i = currPage - pagePadding; i <= currPage + pagePadding; i++) {
      pageNums.push(i);
    }  
  }

  var handleGoto = value => event => {
      gotoPage(query, value)
  }

  return (
    <div className="field has-addons has-addons-centered is-centered">

      <p className="control">
        {currPage === 1 ? (
          <button className="button is-link is-light" disabled>
            <span>First</span>
          </button>
        ) : (
          <button className="button is-link is-light" onClick={() => gotoPage(query, 1)}>
            <span>First</span>
          </button>
        )}
      </p>

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

      {pageNums.map(num => {
        if (num === currPage) {
          return(
            <p className="control">
              <button className="button is-light" onClick={handleGoto(num)} disabled>
                <span><u>{num}</u></span>
              </button>
            </p>
          )
        } else {
          return(
            <p className="control">
              <button className="button is-light" onClick={handleGoto(num)}>
                <span>{num}</span>
              </button>
            </p>
          )
        }
      })}

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
      <p className="control">
        {currPage === pages ? (
          <button className="button is-link is-light" disabled>
            <span>Last</span>
          </button>
        ) : (
          <button className="button is-link is-light" onClick={() => gotoPage(query, pages)}>
            <span>Last</span>
          </button>
        )}
      </p>
    </div>
  )
};

export default SearchPageNavigator
