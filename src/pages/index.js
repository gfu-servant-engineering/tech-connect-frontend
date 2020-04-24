import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ProjectTile from '../components/ProjectTile.js'
import StoryTile from '../components/StoryTile.js'

const IndexPage = ({data}) => (
      <Layout>
        <section className="section" >
          <div className="container" >
            <div className="content" >
            <center>
                  <h1 className="has-text-weight-bold is-size-2 has-text-primary is-hidden-mobile">
                    Tech Connect is looking for people with a faith in Jesus Christ and the desire to
                    share their time and talents to partner with this ministry.
                  </h1>
                  <h1 className="has-text-weight-bold is-size-2 has-text-primary is-hidden-tablet">
                      Tech Connect
                  </h1>
              </center>
            </div>
            <h1 className="has-text-weight-bold is-size-3 has-text-primary">Featured Projects</h1>
            <hr className="horizontal-rule" />
                <div className="columns is-multiline is-centered">
                  {data.allStrapiProject.edges.map(document => (
                      <div key={document.node.id} className="column is-8-tablet is-6-desktop is-3-widescreen">
                          <ProjectTile data={document.node}></ProjectTile>
                      </div>
                  ))}
                </div>
            <h1 className="has-text-weight-bold is-size-3 has-text-primary">Success Stories</h1>
            <hr className="horizontal-rule" />
            <div className="columns is-multiline is-centered">
                  {data.allStrapiBlogpage.edges.map(document => (
                      <div key={document.node.id} className="column is-8-tablet is-6-desktop is-3-widescreen">
                          <StoryTile data={document.node}></StoryTile>
                      </div>
                  ))}
            </div>
          </div>
        </section>
      </Layout>
    )

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiProject (filter: {is_draft: {eq: false}}, limit: 4){
      edges {
        node {
          id
          project_name
          short_description
          sponsor_name
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
    allStrapiBlogpage (limit: 4){ 
      edges {
        node {
            id
            title
            short_description
            image {
              childImageSharp {
                fluid(maxWidth:300, maxHeight:200, quality:90, toFormat: JPG) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            templateKey
            date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
