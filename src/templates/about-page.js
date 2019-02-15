import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const AboutPageTemplate = ({
  title,
  image,
  heading,
  mission,
  quote,
  description,
}) => {

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
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

              <h4 className="is-size-4"
              style={{
                width: '60%',
                marginLeft: '20%',
                paddingBottom: '3%',
                fontFamily: 'calibri',
                textAlign: 'center'
              }}>
                {mission}
              </h4>
              <div style={{
                width: '80%',
                marginLeft: '10%',
              }}>
                <h2 className="is-size-3">{heading}</h2>
                <hr style={{
                  color:'#1C2833',
                  backgroundColor: '#1C2833',
                  height: 5
                }}/>
                <p >{description}</p>
              </div>
            </div>
            <div className="full-width-image-container"
            style={{
              background:'#1C2833',
              color: 'white',
              marginTop: '3%',
            }}><h2 className="is-size-4"
            style={{
              width: '60%',
              fontFamily: 'calibri',
              textAlign: 'center'
            }}
            >{quote}</h2></div>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  mission: PropTypes.string,
  heading: PropTypes.string,
  quote: PropTypes.string,
  description:PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        heading={post.frontmatter.heading}
        mission={post.frontmatter.mission}
        description={post.frontmatter.description}
        quote={post.frontmatter.quote}
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
        heading
        description
        quote
      }
    }
  }
`
