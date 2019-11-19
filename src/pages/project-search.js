import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import SearchField from '../components/SearchField';
import SearchResults from '../components/SearchResults';

const ProjectSearch = ({data, location}) => {
  const [results, setResults] = useState([]);
  const searchQuery = new URLSearchParams(location.search).get('keywords') || '';

  useEffect(() => {
    if (searchQuery && window.__LUNR__) {
      window.__LUNR__.__loaded.then(lunr => {
        const refs = lunr.en.index.search(searchQuery);
        const posts = refs.map(({ ref }) => lunr.en.store[ref]);
        setResults(posts);
      });
    }
  }, [location.search]);

  return (
    <Layout location={location} title={data.site.siteMetadata.title}>
      <SearchField query={searchQuery} />
      <SearchResults query={searchQuery} results={results} data={data}/>
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