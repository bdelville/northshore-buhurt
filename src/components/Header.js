import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-shield"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Buhurt - New Zealand</h1>
                <p>Fight like a knight in New Zealand</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('buhurt')}}>The sport</a></li>
                <!-- TODO Restore once split in 2 tabs -->
                <!--<li><a href="javascript:;" onClick={() => {props.onOpenArticle('world')}}>In the World</a></li>-->
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('nz')}}>New Zealand</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('help')}}>Get Started</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('events')}}>Where to go?</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
