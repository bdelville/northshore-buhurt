import React from 'react'

import hmbLogo from '../images/hmb-logo.png'
import imcfLogo from '../images/imcf.png'

class WorldPage extends React.PureComponent {
  render() {
    return (
    <div>
          <h2 className="major">World Federations</h2>

          <h3>HMB</h3>
          <span className="image"><img width="100" height="100" src={hmbLogo} alt="" href="http://botn.info/en/"/></span>
          <p>
          Maybe the largest federation for buhurt it describes itself this way:
          "The main task of the HMB International Association is to develop historical medieval battle (HMB) as a worldwide sport 
          and cultural movement and make it popular for people of all ages."
          </p><p>
          Their ruleset is applied for many tournaments, mostly in Europe, where teams acquire points for their international ranking: Bohurt League. 
          But the major one is the famous "Battle Of The Nations®".
          </p>
          <p>
          </p>


          <h3>IMCF</h3>
          <span className="image"><img width="100" height="100" src={imcfLogo} alt="" href="https://www.medieval-combat.net/"/></span>
          <p>
          The second international federation focus on a yearly competition inside a castle. They describe themselves this way:
          "The IMCF brings together the best fighters from across the globe to compete in historical medieval combat competitions. [...]
          Competitors will battle in 3 different one-on-one competition, and National teams will face off in 4 different melee categories."
          </p>
          <p>
          </p>

          <h3>Other</h3>
          <p>There are other federations such as AMCF, but they are limited to a location or not relevant to NZ.</p>
    </div>
    )
  }
}

export default WorldPage