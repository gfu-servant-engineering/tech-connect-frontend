import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import SearchField from '../components/SearchField';
import SearchResults from '../components/SearchResults';
import SearchPageNavigator from '../components/SearchPageNavigator';

const ProjectSearch = ({data, location}) => {
  const [results, setResults] = useState([]);
  const searchQuery = new URLSearchParams(location.search).get('keywords') || '';
  const searchPage = parseInt(new URLSearchParams(location.search).get('page') || 1);
  const resultsPerPage = 2;

  useEffect(() => {
    if (searchQuery && window.__LUNR__) {
      window.__LUNR__.__loaded.then(lunr => {
        const refs = lunr.en.index.search(searchQuery);
        const posts = refs.map(({ ref }) => lunr.en.store[ref]);
        setResults(posts);
      });
    }
  }, [searchQuery]);

  const pages = Math.floor((results.length - 1) / resultsPerPage) + 1;
  const paginatedResults = results.slice((searchPage - 1) * resultsPerPage, (searchPage * resultsPerPage));

  return (
    <Layout>
      <section className="section" >
        <div className="container" >
          <div className="content" >
            <h1 className="has-text-weight-bold is-size-3 has-text-primary">Project Search</h1>
            <SearchField query={searchQuery} />
            <SearchPageNavigator pages={pages} currPage={searchPage} query={searchQuery}/>
            <hr className="horizontal-rule" />
            <SearchResults query={searchQuery} results={paginatedResults} data={data}/>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allStrapiProject {
      edges {
        node {
          id
          project_image {
            childImageSharp {
              fluid(maxWidth:300, maxHeight:200, quality:90, toFormat: JPG) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

export default ProjectSearch