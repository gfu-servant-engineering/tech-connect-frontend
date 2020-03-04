import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage.js'
import ReactMarkdown from "react-markdown"

const ProjectTile = ({ data }) => {

  return (
    <div>
      <Link to={`/${data.id}`}><PreviewCompatibleImage imageInfo={data.project_image} /></Link>
      <h3 className="has-text-weight-bold is-size-5">
        <Link className="has-text-primary" style={{display:'inline-block'}} to={`/${data.id}`}>{data.project_name}</Link>
      </h3>
      <h4 className="has-text-weight-normal is-size-5 is-size-6">
        <i>Sponsored by {data.sponsor_name}</i>
      </h4>
      <Link className="has-text-primary ellipsis is-ellipsis-3" to={`/${data.id}`}>
        <ReactMarkdown source={data.project_description} />
      </Link>
    </div>
  )
}

ProjectTile.propTypes = {
      id: PropTypes.number,
      project_name: PropTypes.object,
      project_description: PropTypes.string,
      project_goals: PropTypes.string,
      project_blurb: PropTypes.string,
}

export default ProjectTile
