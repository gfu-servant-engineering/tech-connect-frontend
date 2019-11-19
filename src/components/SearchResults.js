import React from 'react';
import { Link } from 'gatsby'
import ProjectTile from '../components/ProjectTile.js';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage.js'

const SearchResults = ({data, query, results}) => {

  // Search for and attach appropriate image to each result
  // TODO: Implement a binary search
  if (!!results[0]) {
    for (var i = 0; i < results.length; i++) {
      for (var j = 0; j < data.allStrapiProject.edges.length; j++) {
        if (data.allStrapiProject.edges[j].node.id === results[i].id) {
          results[i].imageData = data.allStrapiProject.edges[j].node.project_image
        }
      }
    }
  }

  return(
    <section aria-live="assertive">
      <div className="columns is-multiline is-centered">
        {results.map(document => {
          return(
            <div key={document.id} className="column is-8-tablet is-6-desktop is-3-widescreen">
              <Link to={document.id}><PreviewCompatibleImage imageInfo={document.imageData} /></Link>
              <ProjectTile data={document}></ProjectTile>
            </div>
          )
        })}
      </div>
    </section>
  )
};

export default SearchResults
