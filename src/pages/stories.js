import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout.js'
import StoryTile from '../components/StoryTile.js'

const StoriesPage = ({ data }) => (
  <Layout>
  <section className="section">
    <div className="container">
      <h1 className="has-text-weight-bold is-size-1 has-text-primary">Explore Stories</h1>
      <hr className="horizontal-rule" />
      <br></br>
      <div>
        <div className="columns is-multiline is-centered">
          {data.allStrapiBlogpage.edges.map(document => (
              <div key={document.node.id} className="column is-5-tablet is-4-desktop is-3-widescreen">
                  <StoryTile data={document.node}></StoryTile>
              </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  </Layout>
)

export default StoriesPage

export const pageQuery = graphql`
  query StoryPage {
    allStrapiBlogpage {
      edges {
        node {
          id
          title
          date
          short_description
          image {
          childImageSharp {
            fluid(maxWidth:700, maxHeight:470, quality:90, toFormat:JPG) {
             ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
