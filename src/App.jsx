import React from 'react'

import axios from 'axios'

import articles, { site } from './source.jsx'
import ViewPort from './ViewPort.jsx'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      view: [],
      url: '',
      ready: false
    }
    this.handleContent = this.handleContent.bind(this)
    this.handleUrlChange = this.handleUrlChange.bind(this)
    this.scrapeSite = this.scrapeSite.bind(this)
  }

  handleContent (i) {
    const { view } = this.state
    const newView = view.slice()

    if (newView.includes(i)) {
      newView.splice(newView.indexOf(i), 1)
    } else {
      newView.push(i)
      this.setState({
        view: newView
      })
    }
  }

  handleUrlChange (e) {
    const { url } = this.state
    this.setState({
      url: e.target.value
    })
  }

  scrapeSite () {
    axios.get('/')
      .then((response) => this.setSite(response))
      .catch((err) => console.error(err))
  }

  render () {
    const { view, ready } = this.state
    return (
      <div className='app-container' style={{ border: 'thick solid red' }}>
        <div className='app-header' style={{ border: 'thin solid black' }}>
          <h5>Header</h5>
        </div>
        <div className='app-navbar' style={{ border: 'thin solid black' }}>
          <form onSubmit={this.scrapeSite}>
            <input
              type='search'
              className='app-url'
              onChange={this.handleUrlChange}
            />
          </form>
        </div>
        <div className='app-viewPort' style={{ border: 'thin solid black' }}>
          {ready && <ViewPort site={site} articles={articles} handleContent={this.handleContent} view={view} />}
          {!ready && <h1>Hello World!</h1>}
        </div>
        <div className='app-footer' style={{ border: 'thin solid black' }}>
          <h5>Footer</h5>
        </div>
      </div>
    )
  }
}

export default App
