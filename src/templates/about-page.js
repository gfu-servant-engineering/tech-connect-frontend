import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout.js'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage.js'
import Disqus from 'disqus-react'
import { FaGithub, FaTrello, FaRegEnvelope, FaSlack} from 'react-icons/fa'
import ResponsiveEmbed from 'react-responsive-embed'
const AboutPageTemplate = ({data}) => {
  <Layout>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-12 is-offset-0">
            <div className="section">
              <div
                className="full-width-image-container margin-top-0"
                style={{
                  backgroundImage: `url(${
                    !! data.strapiAboutpage.image && !! data.strapiAboutpage.image.childImageSharp
                      ? data.strapiAboutpage.image.childImageSharp.fluid.src
                      : data.strapiAboutpage.image
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
                  {data.strapiAboutpage.title}
                </h2>
              </div>
              <h4 className="is-size-3"
                style={{width: '100%', paddingBottom: '5%', textAlign: 'center'}}>
                {mission}
              </h4>
              <SectionHeader SectionHeader={data.strapiAboutpage.headingAboutTechConnect}/>
              <div style={{width: '80%', marginLeft: '10%', paddingBottom: '5%'}}>
                <div className="columns is-centered is-vcentered">
                  <div className="column is-7">
                    <p className="is-size-5">{data.strapiAboutpage.aboutTechConnect}</p>
                  </div>
                  <div className="column is-5">
                    <PreviewCompatibleImage imageInfo={data.strapiAboutpage.image2} />
                  </div>
                </div>
              </div>
              <SectionHeader SectionHeader={data.strapiAboutpage.headingAboutMAF} style={{paddingTop: '5%'}}/>
              <div style={{width: '80%', marginLeft: '10%'}}>
                <div className="columns is-centered is-vcentered">
                  <div className="column is-5">
                    <PreviewCompatibleImage imageInfo={data.strapiAboutpage.image3} />
                  </div>
                  <div className="column is-7">
                    <p className="is-size-5">{data.strapiAboutpage.aboutMAF}</p>
                  </div>
                </div>
            </div>
            </div>
            <div className="full-width-image-container" style={{height: '40em'}}>
              <div>
                <div className="columns is-centered is v-centered has-text-centered is-multiline">
                  <div className="column is-12">
                    <h2 className="is-size-3 has-text-weight-normal" 
                      style={{color: 'white', fontStyle: 'italic', paddingLeft: '10%', paddingRight: '10%'}}>
                      {data.strapiAboutpage.quote}
                    </h2>
                  </div>
                  <div className="column is-12">
                    <Link to="/create-project">
                      <button className="button is-primary-invert is-large">
                        {data.strapiAboutpage.button}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)



export default AboutPage

export const aboutPageQuery = graphql`
  query strapiAboutpage($id: String!) {
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
`
