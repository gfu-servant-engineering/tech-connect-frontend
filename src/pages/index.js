import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

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
                {data.allStrapiProject.edges.map(document => (
                  <li style={{display:'inline-block'}} key={document.node.id}>
                    <Img style={{marginLeft:'20%'}} fixed={document.node.project_image.childImageSharp.fixed}/>
                    <h2>
                      <Link style={{marginLeft:'20%', display:'inline-block'}} to={`/${document.node.id}`}>{document.node.project_name}</Link>
                    </h2>
                  </li>
                ))}
            <h1 className="has-text-weight-bold is-size-3" style={{color: '#1C2833'}}>Success Stories</h1>
            <hr style={{
                  color:'#1C2833',
                  backgroundColor: '#1C2833',
                  height: 5
                }}/>
            <Navbar />
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
    allStrapiProject {
      edges {
        node {
          id
          project_name
	        project_image {
	           childImageSharp {
	              fixed(width:200, height:200) {
		               ...GatsbyImageSharpFixed
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
