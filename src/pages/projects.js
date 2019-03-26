import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout.js'
import ProjectTile from '../components/ProjectTile.js'
import "antd/dist/antd.css";
import { Row, Col } from 'antd';
import LinesEllipsis from 'react-lines-ellipsis'

const ProjectPage = ({ data }) => (
  <Layout>
  <section className="section">
    <div className="container">
      <h1 className="has-text-weight-bold is-size-1" style={{color: '#1C2833'}}>Explore Projects</h1>
      <hr style={{
            color:'#1C2833',
            backgroundColor: '#1C2833',
            height: 5
          }}/>
      <br></br>
      <div>
        <Row type="flex" justify="center" align="top" gutter={12}>
          {data.allStrapiProject.edges.map(document => (
              <Col xs={15} sm={12} md={10} lg={8} xl={6}>
                <li style={{display:'inline-block'}} key={document.node.id}>
                  <ProjectTile data={document.node}></ProjectTile>
                </li>
              </Col>
          ))}
        </Row>
      </div>
    </div>
  </section>
  </Layout>
)

export default ProjectPage

export const pageQuery = graphql`
  query ProjectPage {
    allStrapiProject {
      edges {
        node {
          id
          project_name
          project_description
          project_goals
          project_blurb
          project_holy_goals
          project_timeline
  	      project_image {
  	         childImageSharp {
  	            fluid(maxWidth:300, maxHeight:200, quality:90, toFormat:JPG) {
  		             ...GatsbyImageSharpFluid
  	            }
  	          }
  	        }
          profiles {
            profile_name
          }
        }
      }
    }
  }
`
