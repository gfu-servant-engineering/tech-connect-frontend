import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Button, Row, Col } from 'antd'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Navbar from '../components/Navbar';


export const AboutPageTemplate = ({
  title,
  image,
  headingAboutTechConnect,
  headingAboutMAF,
  mission,
  quote,
  aboutTechConnect,
  aboutMAF,
  image2,
  image3
}) => {

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-12 is-offset-2">
            <div className="section">
              <div
                className="full-width-image-container margin-top-0"
                style={{
                  backgroundImage: `url(${
                    !!image && !!image.childImageSharp
                      ? image.childImageSharp.fluid.src
                      : image
                  })`,
                }}
              >
                <h2
                  className="is-size-1"
                  style={{
                    boxShadow: '0.5rem 0 0 #1C2833, -0.5rem 0 0 #1C2833',
                    backgroundColor: '#1C2833',
                    color: 'white',
                    padding: '1rem',
                    borderRadius: '10px'
                  }}
                >
                  {title}
                </h2>
              </div>
              <h4 className="is-size-3"
              style={{
                width: '100%',
                paddingBottom: '5%',
                textAlign: 'center'
              }}>
                {mission}
              </h4>
              <div style={{
                width: '80%',
                marginLeft: '10%',
              }}>
                <h2 className="is-size-4">{headingAboutTechConnect}</h2>
                <hr style={{
                  color:'#1C2833',
                  backgroundColor: '#1C2833',
                  height: 5
                }}/>
                <Row gutter={40}>
                  <Col span={12}><p className="is-size-5">{aboutTechConnect}</p></Col>
                  <Col span={12}><PreviewCompatibleImage imageInfo={image2} /></Col>
                </Row>
              </div>
              <div style={{
                width: '80%',
                marginLeft: '10%',
                paddingTop: '5%'
              }}>
                <h2 className="is-size-4">{headingAboutMAF}</h2>
                <hr style={{
                  color:'#1C2833',
                  backgroundColor: '#1C2833',
                  height: 5,
                }}/>
                <Row gutter={40}>
                  <Col span={12}><PreviewCompatibleImage imageInfo={image3} /></Col>
                  <Col span={12}><p className="is-size-5">{aboutMAF}</p></Col>
                </Row>
            </div>
            </div>
            <div className="full-width-image-container"
            style={{
              background:'#1C2833',
              color: 'white',
              marginTop: '1%',
            }}><h2 className="is-size-3"
            style={{
              width: '80%',
              color: 'white',
              textAlign: 'center',
              fontStyle: 'italic'
            }}
            >{quote}
            <br /><br /><Button size="large" href="/">Share a Project</Button>
            </h2></div>
          </div>
        </div>
        <Navbar />
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  mission: PropTypes.string,
  headingAboutTechConnect: PropTypes.string,
  headingAboutMAF: PropTypes.string,
  quote: PropTypes.string,
  aboutTechConnect:PropTypes.string,
  aboutMAF: PropTypes.string,
  image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        headingAboutTechConnect={post.frontmatter.headingAboutTechConnect}
        headingAboutMAF={post.frontmatter.headingAboutMAF}
        mission={post.frontmatter.mission}
        aboutTechConnect={post.frontmatter.aboutTechConnect}
        aboutMAF={post.frontmatter.aboutMAF}
        quote={post.frontmatter.quote}
        image2={post.frontmatter.image2}
        image3={post.frontmatter.image3}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mission
        headingAboutTechConnect
        aboutTechConnect
        image2 {
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 400, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }  
        }
        headingAboutMAF
        aboutMAF
        image3 {
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 400, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }  
        }
        quote
      }
    }
  }
`