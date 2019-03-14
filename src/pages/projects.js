import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout.js'
import Navbar from '../components/Navbar.js'
import ReactDOM from "react-dom";
import { version, Button } from 'antd';
import "antd/dist/antd.css";
import { Input } from 'antd';
import { Row, Col } from 'antd';
import { Menu, Dropdown, Icon, message} from 'antd';
import { Pagination } from 'antd';


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


          <Row type="flex" justify="start">
              <Col span={15}></Col>
              <Col span={3}>

              <Dropdown overlay={menu}>
                <Button style={{marginLeft: 8}}>
                  Filter by ... <Icon type="down" />
                </Button>
              </Dropdown>

              </Col>
              <Col span={3}>
                  <Search
                      placeholder="search projects"
                      onSearch={value => console.log(value)}
                      style={{ width: 300}}
                      enterbutton
                  />
              </Col>
          </Row>

          <br></br>
          <br></br>


      <div className="projects">
        <Row type="flex" justify="center" align="top" gutter={24}>

          {data.allStrapiProject.edges.map(document => (
            <Col xs={15} sm={12} md={10} lg={8} xl={6}>
            <li style={{display:'inline-block'}} key={document.node.id}>
              <Img imgStyle={{padding:'0px'}} fixed={document.node.project_image.childImageSharp.fixed} />

              <h3 className="has-text-weight-bold is-size-5">
                <Link style={{display:'inline-block', color: '#1C2833', marginRight: '5%'}} to={`/${document.node.id}`}>{document.node.project_name}</Link>
              </h3>
              <h4 className="has-text-weight-normal is-size-5 is-size-6" style={{color: '#1C2833'}}>
              <i>Organization</i>
              </h4>
              <Link style={{display:'inline-block', color: '#b5b5b5', marginRight: '5%'}} sdfjk  to={`/${document.node.id}`}>{document.node.project_description}</Link>
              <br></br>
              <br></br>
            </li>
            </Col>
          ))}

        </Row>
      </div>
      <Row type="flex" justify="center" align="top">
        <Col span={10}>
            <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />,
        </Col>
      </Row>
    </div>
  </section>

  </Layout>
)


const Search = Input.Search;

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1"><Icon type="hourglass" />Most Recently Created</Menu.Item>
    <Menu.Item key="2"><Icon type="hourglass" />Most Recently Modified</Menu.Item>
  </Menu>
);

function handleButtonClick(e) {
  message.info('Click on left button.');
  console.log('click left button', e);
}

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

function onChange(pageNumber) {
  console.log('Page: ', pageNumber);
}

export default ProjectPage

export const pageQuery = graphql`
  query ProjectQuery {
    allStrapiProject {
      edges {
        node {
          id
          project_name
          project_description
	      project_image {
	         childImageSharp {
	            fixed(width:300, height:200) {
		             ...GatsbyImageSharpFixed
	            }
	          }
	        }
        }
      }
    }
  }
  `
