import React from 'react'
import PropTypes from 'prop-types'

const redirectHero = ({ title }) => (
  <section className="hero is-fullheight-with-navbar">
    <div className="hero-body">
      <div className="container">
        <p className="title">
          {title}
        </p>
      </div>
    </div>
  </section>
)

redirectHero.propTypes = {
    title: PropTypes.string
}

export default redirectHero
