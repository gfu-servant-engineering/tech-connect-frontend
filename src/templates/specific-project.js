import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout.js'
import Navbar from '../components/Navbar.js'
import { Row, Col } from 'antd';
import { Button } from 'antd';

const ProjectTemplate = ({ data }) => (
    <Layout>
        <br></br>
        <br></br>
        <br></br>
        <Row type="flex" justify="center" align="center" >
            <Col xs={20} sm={10} m={10} l={12} xl={6}>
              <Img fixed={data.strapiProject.project_image.childImageSharp.fixed} />
            </Col>
            <Col xs={20} sm={10} m={10} l={12} xl={6}>
              <br></br>
              <br></br>


              <h1 className="has-text-weight-bold is-size-2">{data.strapiProject.project_name}</h1>
              <p>
              <hr style={{
                    color:'#1C2833',
                    backgroundColor: '#1C2833',
                    height: 2
                  }}/>
                <Link style={{color: '#1C2833'}} to={'${data.strapiProject.id}'}>Sponsored by ...</Link>
                <br></br>
                <br></br>
                <br></br>
                <Button type="default" block>Contact Sponsor</Button>
              </p>
            </Col>
        </Row>
        <Row type="flex" justify="center" align="center">
          <Col xs={20} sm={20} m={20} l={20} xl={12}>
            <br></br>
            <br></br>
            <h4 className="has-text-weight-bold is-size-4">Describe your project ...</h4>
              {data.strapiProject.project_description}
            <br></br>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row type="flex" justify="center" align="center" gutter={24}>
            <Col xs={20} sm={20} m={10} l={10} xl={6}>
                <h4 className="has-text-weight-bold is-size-4">What are your goals?</h4>
                <p>{data.strapiProject.project_goals}</p>
            </Col>
            <Col xs={20} sm={20} m={10} l={10} xl={6}>
                <h4 className="has-text-weight-bold is-size-4">This project exemplifies the Kingdom of God by ...</h4>
                <p>{data.strapiProject.project_holy_goals}</p>
            </Col>
        </Row>
        <br></br>
        <br></br>
        <Row type="flex" justify="center" align="center" gutter={24}>
            <Col xs={20} sm={20} m={10} l={10} xl={6}>
                <h4 className="has-text-weight-bold is-size-4">What do you need?</h4>
                <p>{data.strapiProject.project_goals}</p>
            </Col>
            <Col xs={20} sm={20} m={10} l={10} xl={6}>
                <h4 className="has-text-weight-bold is-size-4">Our timeline looks like ...</h4>
                <p>{data.strapiProject.project_holy_goals}</p>
            </Col>
        </Row>
    </Layout>
)

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectTemplate ($id: String!) {
    strapiProject(id: {eq: $id}) {
      project_name
      project_description
      project_goals
      project_holy_goals
      project_timeline
      project_image {
         childImageSharp {
            fixed(width:350, height:350) {
	             ...GatsbyImageSharpFixed
            }
          }
        }
     }
  }
  `
