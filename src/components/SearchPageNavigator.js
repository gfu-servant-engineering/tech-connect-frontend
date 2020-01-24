import React from 'react';
import { navigate } from 'gatsby';

function gotoPage(query, page) {
  navigate(`/project-search?keywords=${encodeURIComponent(query)}&page=${page}`)
}

const SearchPageNavigator = ({pages, currPage, query}) => {

  const pageNums = []
  for (var i = 1; i <= pages; i++) {
    pageNums.push(i);
  }

  var handleGoto = value => event => {
      gotoPage(query, value)
  }

  return (
    {/* Back Button */}
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

    {/* Availiable Pages */}
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

    {/* Next Button */}
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
