import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ProjectTile from '../components/ProjectTile.js'

const IndexPage = ({data}) => (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2 has-text-primary">
                Tech Connect is looking for people with a faith in Jesus Christ and the desire to
                share their time and talents to partner with this ministry.
              </h1>
            </div>
            <h1 className="has-text-weight-bold is-size-3 has-text-primary">Featured Projects</h1>
            <hr className="horizontal-rule" />
                <div className="columns is-multiline is-centered">
                  {data.allStrapiProject.edges.map(document => (
                      <div className="column is-8-tablet is-6-desktop is-3-widescreen">
                          <ProjectTile data={document.node}></ProjectTile>
                      </div>
                  ))}
                </div>
            <h1 className="has-text-weight-bold is-size-3 has-text-primary">Success Stories</h1>
            <hr className="horizontal-rule" />
          </div>
        </section>
      </Layout>
    )

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiProject (limit: 4){
      edges {
        node {
          id
          project_name
          project_description
          profiles {
            id
            profile_name
          }
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
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
