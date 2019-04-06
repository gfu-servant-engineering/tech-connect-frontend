import React from 'react'
import PropTypes from 'prop-types'

const SectionHeader = ({ SectionHeader }) => (
    <div style={{width: '80%', marginLeft: '10%'}}>
        <h2 className="is-size-4">{SectionHeader}</h2>
        <hr class="horizontal-rule" style={{height: 5}}/>
    </div>
)

SectionHeader.propTypes = {
    SectionHeader: PropTypes.string
}

export default SectionHeader