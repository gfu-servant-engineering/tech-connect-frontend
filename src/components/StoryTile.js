import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage.js'
import ReactMarkdown from "react-markdown"


const StoryTile = ({ data }) => {

  return (
    <div>
      <Link to={`/${data.id}`}><PreviewCompatibleImage imageInfo={data.image} /></Link>
      <h3 className="has-text-weight-bold is-size-5">
        <Link className="has-text-primary" style={{display:'inline-block'}} to={`/${data.id}`}>{data.title}</Link>
      </h3>  
      <Link className="has-text-primary" to={`/${data.id}`}>
        <LinesEllipsis
          style={{ whiteSpace: 'pre-wrap' }}
          text={data.description}
          maxLine={3}
        />
      </Link>
    </div>
  )
}

StoryTile.propTypes = {
      id: PropTypes.number,
      title: PropTypes.object,
      description: PropTypes.string,
}

export default StoryTile
