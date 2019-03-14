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

      {/*
        The block of code below contains the frontent components for search
        and filtering. These features are not functioning so they've been
        commented out until the functionality can be completed
      */}

      {/*}
      <Row type="flex" justify="start">
          <Col span={15}>
          <Dropdown overlay={thingys}>
            <Button style={{marginLeft: 8}}>
              Thingys per page <Icon type="down" />
            </Button>
          </Dropdown>
          </Col>
          <Col span={3}>

          <Dropdown overlay={sort}>
            <Button style={{marginLeft: 8}}>
              Sort by ... <Icon type="down" />
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
      */}

      <div className="projects">
        <Row type="flex" justify="center" align="top" gutter={24}>
          {data.allStrapiProject.edges.map(document => (
            <Col xs={15} sm={12} md={10} lg={8} xl={6}>
              <li style={{display:'inline-block'}} key={document.node.id}>
                <Link to={`/${document.node.id}`}><Img imgStyle={{padding:'0px'}} fixed={document.node.project_image.childImageSharp.fixed} /></Link>
                <h3 className="has-text-weight-bold is-size-5">
                <Link style={{display:'inline-block', color: '#1C2833', marginRight: '5%'}} to={`/${document.node.id}`}>{document.node.project_name}</Link>
                </h3>
                <h4 className="has-text-weight-normal is-size-5 is-size-6" style={{color: '#1C2833'}}>
                <Link style={{color: '#1C2833'}} to={`/${document.node.id}`}><i>Sponsored by </i></Link>
                </h4>
                <LinesEllipsis
                    text={document.node.project_description}
                    maxLine='2'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                />
                <br></br>
                <br></br>
              </li>
            </Col>
          ))}
        </Row>
      </div>
      {/* this block of code contains a frontend pagination feature that has
        not been implemented yet

      <Row type="flex" justify="center" align="top">
        <Col span={10}>
            <Pagination showQuickJumper defaultCurrent={1} total={200} onChange={onChange} />
        </Col>
      </Row>
      */}
    </div>
  </section>

  </Layout>
)

export default ProjectPage

{/*
  The block of code below contains the frontent components for search
  and filtering. These features are not functioning so they've been
  commented out until the functionality can be completed
*/}

{/*
const Search = Input.Search;

const sort = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1"><Icon type="hourglass" />Most Recently Created</Menu.Item>
    <Menu.Item key="2"><Icon type="hourglass" />Most Recently Modified</Menu.Item>
  </Menu>
);

const thingys = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1"><Icon type="frown" />1</Menu.Item>
    <Menu.Item key="2"><Icon type="meh" rotate="170" />2</Menu.Item>
    <Menu.Item key="2"><Icon type="smile" />2000000000</Menu.Item>
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

*/}

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
