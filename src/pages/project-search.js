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
    <Layout>
      <section className="section" >
        <div className="container" >
          <div className="content" >
            <h1 className="has-text-weight-bold is-size-3 has-text-primary">Project Search</h1>
            <SearchField query={searchQuery} />
            <hr className="horizontal-rule" />
            <SearchResults query={searchQuery} results={results} data={data}/>
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