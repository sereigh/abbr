import React from 'react'
import PropTypes from 'prop-types'

const Content = ({ content }) => (
  <p>
    {content}
  </p>
)

Content.propTypes = {
  content: PropTypes.string.isRequired
}
