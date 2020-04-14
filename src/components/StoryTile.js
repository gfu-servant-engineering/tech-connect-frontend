import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage.js'


const StoryTile = ({ data }) => {

  return (
    <div>
      <Link to={`/${data.id}`}><PreviewCompatibleImage imageInfo={data.image} /></Link>
      <h3 className="has-text-weight-bold is-size-5">
        <Link className="has-text-primary" style={{display:'inline-block'}} to={`/${data.id}`}>{data.title}</Link>
      </h3>
      <Link className="has-text-primary ellipsis is-ellipsis-3" to={`/${data.id}`}>
        {data.short_description}
      </Link>
    </div>
  )
}

StoryTile.propTypes = {
      id: PropTypes.number,
      title: PropTypes.object,
      image: PropTypes.object,
      short_description: PropTypes.string,
}

export default StoryTile
