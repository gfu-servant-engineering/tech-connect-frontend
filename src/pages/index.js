import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import { Row, Col } from 'antd';

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
                <Row type="flex" justify="center" align="top" gutter={24}>
                    {data.allStrapiProject.edges.map(document => (
                        <Col xs={15} sm={12} md={8} lg={6} xl={4}>
                          <li style={{display:'inline-block'}} key={document.node.id}>
                            <Link to={`/${document.node.id}`}><Img fixed={document.node.project_image.childImageSharp.fixed}/></Link>
                            <h2>
                              <Link className="has-text-weight-semibold is-size-6" style={{color: '#1C2833'}} to={`/${document.node.id}`}>{document.node.project_name}</Link>
                            </h2>
                          </li>
                        </Col>
                    ))}
                </Row>
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
    allStrapiProject (limit: 6){
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
