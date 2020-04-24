import React from 'react';
import { Link } from 'gatsby'
import ProjectTile from '../components/ProjectTile.js';
import StoryTile from '../components/StoryTile.js'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage.js'

const SearchResults = ({data, query, results, isProject}) => {
  return(
    <section aria-live="assertive">
      <div className="columns is-multiline is-centered">
        {results.map(result => {
          return(
            <div key={result.id} className="column is-8-tablet is-6-desktop is-3-widescreen">
              {isProject ? (<ProjectTile data={result}></ProjectTile>) :
                           (<StoryTile data={result}></StoryTile>)}
            </div>
          )
        })}
        {!!query && results.length === 0 ? (<h1 className="is-primary">No Results Found For "{query}"</h1>) : (<p></p>)}
      </div>
    </section>
  )
};

export default SearchResults
