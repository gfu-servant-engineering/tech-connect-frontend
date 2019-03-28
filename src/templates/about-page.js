import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import SectionHeader from '../components/SectionHeader';


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
  image3,
  button,
}) => {

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-12 is-offset-0">
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
                style={{width: '100%', paddingBottom: '5%', textAlign: 'center'}}>
                {mission}
              </h4>
              <SectionHeader SectionHeader={headingAboutTechConnect}/>
              <div style={{width: '80%', marginLeft: '10%', paddingBottom: '5%'}}>
                <div className="columns is-centered is-vcentered">
                  <div className="column is-7">
                    <p className="is-size-5">{aboutTechConnect}</p>
                  </div>
                  <div className="column is-5">
                    <PreviewCompatibleImage imageInfo={image2} />
                  </div>
                </div>
              </div>
              <SectionHeader SectionHeader={headingAboutMAF} style={{paddingTop: '5%'}}/>
              <div style={{width: '80%', marginLeft: '10%'}}>
                <div className="columns is-centered is-vcentered">
                  <div className="column is-5">
                    <PreviewCompatibleImage imageInfo={image3} />
                  </div>
                  <div className="column is-7">
                    <p className="is-size-5">{aboutMAF}</p>
                  </div>
                </div>
            </div>
            </div>
            <div className="full-width-image-container" 
              style={{background:'#1C2833', color: 'white', marginTop: '1%', paddingBottom: '0'}}>
              <div>
                <div className="columns is-centered has-text-centered is-multiline">
                  <div className="column is-12">
                    <h2 className="is-size-3 has-text-weight-normal" 
                      style={{color: 'white', fontStyle: 'italic', paddingLeft: '10%', paddingRight: '10%'}}>
                      {quote}
                    </h2>
                  </div>
                  <div className="column is-12">
                    <Link className="button has-text-centered"
                      style={{fontWeight: 'bold', fontSize: '20px'}} size="large" href="/">
                      {button}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  button: PropTypes.string
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
        button={post.frontmatter.button}
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
            fluid(maxWidth: 2048, quality: 100, toFormat:JPG) {
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
              fluid(maxWidth: 400, quality: 90, toFormat:JPG) {
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
              fluid(maxWidth: 400, quality: 90, toFormat:JPG) {
                ...GatsbyImageSharpFluid
              }
            }
          }  
        }
        quote
        button
      }
    }
  }
`
