import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Disqus from 'disqus-react'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
  image
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="columns is-centered">
                <div className="column is-10">
                    <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                      {title}
                    </h1>
                    <center>
                        <PreviewCompatibleImage imageInfo={image} /><br/>
                    </center>
                    <p>{description}</p><br/>
                    <PostContent content={content} />
                </div>
            </div>
              <div style={{ marginTop: `4rem` }}>

                <Disqus.DiscussionEmbed shortname="tech-connect" />
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  const disqusConfig = {
    identifier: post.id,
    title: post.frontmatter.title,
  };

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        image={post.frontmatter.image}
        description={post.frontmatter.description}
        helmet={
          <Helmet
            titleTemplate="%s | Blog"
          >
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.description}`} />
          </Helmet>
        }
        title={post.frontmatter.title}
      />
      <Disqus.DiscussionEmbed shortname="tech-connect" config={disqusConfig} />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        image {
          childImageSharp {
            fluid(maxWidth:700, maxHeight:470, quality: 100, toFormat:JPG) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
      }
    }
  }
`
