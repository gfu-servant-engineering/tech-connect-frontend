import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import ProjectTile from '../components/ProjectTile.js'

const IndexPage = ({data}) => (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2" style={{color: '#1C2833'}}>
                Tech Connect is looking for people with a faith in Jesus Christ and the desire to
                share their time and talents to partner with this ministry.
              </h1>
            </div>
            <h1 className="has-text-weight-bold is-size-3" style={{color: '#1C2833'}}>Featured Projects</h1>
            <hr style={{
                  color:'#1C2833',
                  backgroundColor: '#1C2833',
                  height: 5
                }}/>
                <div className="tile is-ancestor is-multiline">
                  {data.allStrapiProject.edges.map(document => (
                      <div className="tile is-parent is-vertical is-4">
                          <ProjectTile data={document.node}></ProjectTile>
                      </div>
                  ))}
                </div>
            <h1 className="has-text-weight-bold is-size-3" style={{color: '#1C2833'}}>Success Stories</h1>
            <hr style={{
                  color:'#1C2833',
                  backgroundColor: '#1C2833',
                  height: 5
                }}/>
          </div>
        </section>
      </Layout>
    )

export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiProject (limit: 4){
      edges {
        node {
          id
          project_name
          project_description
          profiles {
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
