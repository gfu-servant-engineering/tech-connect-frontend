import React from 'react'
import PropTypes from 'prop-types'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'


const UnstyledHero = ({
  imageInfo, 
  className,
  title,
}) => {
  const { childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <BackgroundImage Tag="section"
        className={className}
        fluid={image.childImageSharp.fluid}
      >
      <div className="columns is-centered">
        <div className="column is-narrow">
          <div className="box has-background-dark">
            <h2 className="title is-1">
              {title}
            </h2>
          </div>
        </div>
      </div>
      </BackgroundImage>
    )
  }

  if (!!childImageSharp) {
    return (
      <BackgroundImage Tag="section"
        className={className}
        fluid={childImageSharp.fluid}>
      <div className="columns is-centered">
        <div className="column is-narrow">
          <div className="box has-background-dark">
            <h2 className="title is-1 has-text-centered">
              {title}
            </h2>
          </div>
        </div>
      </div>
      </BackgroundImage>
    )
  }

  if (!!image && typeof image === 'string') {
    return (
      <div className={className}
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
        }}
      >
      <div className="columns is-centered">
        <div className="column is-narrow">
          <div className="box has-background-dark">
            <h2 className="title is-1">
              {title}
            </h2>
          </div>
        </div>
      </div>
      </div>
    )
  }

  if (!!imageInfo && typeof imageInfo === 'string') {
    return (
      <div className={className}
        style={{
          backgroundImage: `url(${imageInfo})`,
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',

        }}
      >
      <div className="columns is-centered">
        <div className="column is-narrow">
          <div className="box has-background-dark">
            <h2 className="title is-1">
              {title}
            </h2>
          </div>
        </div>
      </div>
      </div>
    )
  }

  return null
}

UnstyledHero.propTypes = {
  imageInfo: PropTypes.oneOfType([
    PropTypes.string, 
    PropTypes.shape({
      alt: PropTypes.string,
      childImageSharp: PropTypes.object,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      style: PropTypes.object,
    })
  ]).isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
}

const PreviewCompatibleHero = styled(UnstyledHero)`
  width: 100%;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`

export default PreviewCompatibleHero
