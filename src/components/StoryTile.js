import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage.js'
import ReactMarkdown from "react-markdown"

const StoryTile = ({ data }) => (
  <div>
    <Link to={data.fields.slug}><PreviewCompatibleImage imageInfo={data.frontmatter.image}/></Link>
    <h3 className="has-text-weight-bold is-size-5">
      <Link className="has-text-primary" style={{display:'inline-block'}} to={data.fields.slug}>{data.frontmatter.title}</Link>
    </h3>
    <Link className="has-text-primary ellipsis is-ellipsis-3" to={data.fields.slug}>
      <ReactMarkdown source={data.excerpt} />
    </Link>
  </div>
)

StoryTile.propTypes = {
      data: PropTypes.object.isRequired,
}

export default StoryTile
