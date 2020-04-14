import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout.js'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage.js'
import Disqus from 'disqus-react'

const BlogPostTemplate = ({data}) => (
  <Layout>
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="columns is-centered">
                <div className="column is-10">
                    <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                      {data.strapiBlogpage.title}
                    </h1>
                    <center>
                        <PreviewCompatibleImage imageInfo={data.strapiBlogpage.image} /><br/>
                    </center>
                    <p>{data.strapiBlogpage.description}</p><br/>
                </div>
            </div>
              <div style={{ marginTop: `4rem` }}>

                <Disqus.DiscussionEmbed shortname="tech-connect" />
              </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostTemplate ($id: String!) {
    strapiBlogpage(id: {eq: $id}) {
      title
      date
      description
      image {
        childImageSharp {
          fluid(maxWidth:700, maxHeight:470, quality:90, toFormat:JPG) {
             ...GatsbyImageSharpFluid
          }
        }
      }
   }
 }
 `
