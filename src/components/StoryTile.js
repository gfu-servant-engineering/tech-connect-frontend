import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import LinesEllipsis from 'react-lines-ellipsis'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage.js'

const StoryTile = ({ data }) => (
  <div>
    <Link to={data.fields.slug}><PreviewCompatibleImage imageInfo={data.frontmatter.image}/></Link>
    <h3 className="has-text-weight-bold is-size-5">
      <Link style={{display:'inline-block', color: '#1C2833'}} to={data.fields.slug}>{data.frontmatter.title}</Link>
    </h3>
    <Link style={{color: '#1C2833'}} to={data.fields.slug}><LinesEllipsis
      text={data.excerpt}
      maxLine='3'
      ellipsis='...'
      trimRight
      basedOn='letters'
      /></Link>
  </div>
)

StoryTile.propTypes = {
      data: PropTypes.object.isRequired,
}

export default StoryTile
