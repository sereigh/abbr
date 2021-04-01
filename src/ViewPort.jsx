import React from 'react'
import PropTypes from 'prop-types'

import Content from './Content.jsx'

const ViewPort = ({ site, articles, toggleContent, view }) => (
  <>
    <h1>{site.title}</h1>
    <h2>{site.subtitle}</h2>
    {articles.map((article, i) => (
      <div key={article.id}>
        <div
          className='content-header'
          role='button'
          tabIndex={0}
          onClick={toggleContent(i)}
          onKeyPress={toggleContent(i)}
        >
          <h3>{article.heading}</h3>
        </div>
        <span
          className={(view.includes(i) ? 'content-show' : 'content-hide')}
        >
          <Content article={article.content} />
        </span>
      </div>
    ))}
  </>
)

ViewPort.propTypes = {
  articles: PropTypes.oneOfType([
    PropTypes.string
  ]).isRequired,
  site: PropTypes.oneOfType([
    PropTypes.string
  ]).isRequired,
  view: PropTypes.oneOfType([
    PropTypes.number
  ]).isRequired,
  toggleContent: PropTypes.func.isRequired
}

export default ViewPort
