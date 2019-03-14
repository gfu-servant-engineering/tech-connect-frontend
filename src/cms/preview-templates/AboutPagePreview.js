import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry }) => {


return (
  <AboutPageTemplate
    image={entry.getIn(['data', 'image'])}
    title={entry.getIn(['data', 'title'])}
    mission={entry.getIn(['data', 'mission'])}
    quote={entry.getIn(['data', 'quote'])}
    headingAboutTechConnect={entry.getIn(['data', 'headingAboutTechConnect'])}
    aboutTechConnect={entry.getIn(['data', 'aboutTechConnect'])}
    headingAboutMAF={entry.getIn(['data', 'headingAboutMAF'])}
    aboutMAF={entry.getIn(['data', 'aboutMAF'])}
  />
)
}


AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default AboutPagePreview
