import React from 'react'

import sampleSite from './sampleSite.jsx'
// import PropTypes from 'prop-types'
// import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      site: sampleSite,
    }
  }

  render() {
    return (
      <div className="app-container" style={{border: "thin solid black"}}>
        <h1>App Container</h1>
        <div className="app-header" style={{border: "thin solid black"}}>
          <h5>Header</h5>
        </div>
        <div className="app-navbar" style={{border: "thin solid black"}}>
          <h4>URL Bar</h4>
        </div>
        <div className="app-viewPort" style={{border: "thin solid black"}}>
          <h3>View Port</h3>
        </div>
        <div className="app-footer" style={{border: "thin solid black"}}>
          <h5>Footer</h5>
        </div>
      </div>
    )
  }
}

export default App;
