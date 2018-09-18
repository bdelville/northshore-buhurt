import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-shield"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Buhurt Nortshore</h1>
                <p>Discover Buhurt in Northsore and in New Zealand</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('buhurt')}}>The sport</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('world')}}>In the World</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('nz')}}>In New Zealand</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('northshore')}}>In NorthShore</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('help')}}>Get Started</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
