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
    image2={{
      image: entry.getIn(['data', 'main', 'image2', 'image']),
      alt: entry.getIn(['data', 'main', 'image2', 'alt']),
    }}
    headingAboutMAF={entry.getIn(['data', 'headingAboutMAF'])}
    aboutMAF={entry.getIn(['data', 'aboutMAF'])}
    image3={{
      image: entry.getIn(['data', 'main', 'image2', 'image']),
      alt: entry.getIn(['data', 'main', 'image2', 'alt']),
    }}
    button={entry.getIn(['data', 'button'])}
  />
)
}


AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default AboutPagePreview
