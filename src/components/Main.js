import React from 'react'
import PropTypes from 'prop-types'

import BuhurtPage from '../pages/buhurt'
import WorldPage from '../pages/world'
import NZPage from '../pages/nz'
import NorthshorePage from '../pages/northshore'
import HelpPage from '../pages/help'
import EventsPage from '../pages/events'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {
      this.props.onCloseArticle()
    }}></div>

    return (
      <div id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>

        <article id="buhurt"
                 className={`${this.props.article === 'buhurt' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
                 style={{ display: 'none' }}>
          <BuhurtPage/>
          {close}
        </article>

        <article id="world"
                 className={`${this.props.article === 'world' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
                 style={{ display: 'none' }}>
          <WorldPage/>
          {close}
        </article>

        <article id="nz"
                 className={`${this.props.article === 'nz' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
                 style={{ display: 'none' }}>
          <NZPage/>
          {close}
        </article>

        <article id="northshore"
                 className={`${this.props.article === 'northshore' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
                 style={{ display: 'none' }}>
          <NorthshorePage/>
          {close}
        </article>

        <article id="help"
                 className={`${this.props.article === 'help' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
                 style={{ display: 'none' }}>
          <HelpPage/>
          {close}
        </article>

        <article id="events"
                 className={`${this.props.article === 'events' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`}
                 style={{ display: 'none' }}>
          <EventsPage/>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Main