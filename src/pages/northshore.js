import React from 'react'

import headerImg from '../images/header-northshore.jpg'

class NorthshorePage extends React.PureComponent {
  render() {
    return (
      <div>
        <h2 className="major">Start a Team</h2>
        <span className="image main"><img src={headerImg} alt=""/></span>

        <h3 className="major">In Northshore</h3>
        <p>Most Northshore fighters now train with East Auckland Eagles, a new but strong team.</p>
        <p>However as East Auckland will grow and dwellers of places like Torbay or Orewa live very far, it makes sense
          to open a new associated team up North.</p>
        <p>Don't hesitate to raise your interest and contact:</p>
        <ul><li><a href="https://www.facebook.com/groups/757920417940036/">Northshore Knights</a></li></ul>

        <h3 className="major">In Chatham Island</h3>
        <p>Yes! We can be found even in the most remote places. 
        Chatham island is the place when one of the strongest buhurt fighter of New Zealand dwell.</p>

        <h3 className="major">In Whangarei</h3>
        <p>Some fighters are known for starting a team in Whangarei. 
        However there are just stqrting, so don't hesitate to contact them through the federations page</p>

        <h3 className="major">In Christchurch</h3>
        <p>Some fighters are known for starting a team in Christchurch. 
        However there are just starting, so don't hesitate to contact them through the federations page</p>

        <ul>
          <li><a href="https://www.facebook.com/BattlenatioNZ">Battle Of Nation NZ page (HMBNZ)</a></li>
          <li><a href="https://www.facebook.com/NZFCMCPAGE">IMCF page</a></li>
        </ul>
      </div>
    )
  }
}

export default NorthshorePage