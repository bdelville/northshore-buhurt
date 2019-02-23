import React from 'react'

import headerImg from '../images/header-northshore.jpg'

class NorthshorePage extends React.PureComponent {
  render() {
    return (
      <div>
        <h2 className="major">Start in NorthShore</h2>
        <span className="image main"><img src={headerImg} alt=""/></span>
        <p>Most Northshore fighters now train with East Auckland Eagles, a new but strong team.</p>
        <p>However as East Auckland will grow and dwellers of places like Torbay or Orewa live very far, it makes sense
          to open a new associated team up North.</p>
        <p>Don't hesitate to raise your interest and contact:</p>

        <ul>
          <li><a href="https://www.facebook.com/groups/757920417940036/">Northshore Knights</a></li>
          <li><a href="https://www.facebook.com/East-Auckland-Eagles-HMB-1638528559544108/">East Auckland Eagles</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default NorthshorePage