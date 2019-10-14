import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import LinesEllipsis from 'react-lines-ellipsis'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage.js'

const StoryTile = ({ data }) => (
  <div>
    <Link to={data.fields.slug}><PreviewCompatibleImage imageInfo={data.frontmatter.image}/></Link>
    <h3 className="has-text-weight-bold is-size-5">
      <Link className="has-text-primary" style={{display:'inline-block'}} to={data.fields.slug}>{data.frontmatter.title}</Link>
    </h3>
    <Link className="has-text-primary" to={data.fields.slug}>
      <LinesEllipsis
        style={{ whiteSpace: 'pre-wrap' }}
        text={data.excerpt}
        maxLine='3'
      />
    </Link>
  </div>
)

StoryTile.propTypes = {
      data: PropTypes.object.isRequired,
}

export default StoryTile
