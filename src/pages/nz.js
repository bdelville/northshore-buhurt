import React from 'react'

import nzBanner from '../images/pic03.jpg'
import logoBCoy from '../images/logo-bcoys.jpg'
import logoEEA from '../images/logo-eagles.png'
import logoWAK from '../images/logo-wac.jpg'
import logoTAK from '../images/logo-tac.jpg'
import logoMAC from '../images/logo-mac.jpg'
import logoRAC from '../images/logo-hornets.jpg'
import logoST from '../images/logo-steelthorns.jpg'
import logoFelag from '../images/logo-felag.jpg'

class NZPage extends React.PureComponent {
  render() {
    return (
    <div>
          <h2 className="major">Buhurt in NZ</h2>
          <span className="image main"><img src={nzBanner} alt="" /></span>
          <p>Existing teams from North to South:</p>

          <img width="100" height="100" class="image right" src={logoBCoy}/>
          <h3>B Company - Auckland</h3>
          <p>B Coys form one of the oldest team, with many success. They train regularly south of One Tree Hill</p>
          <p>Contact: <a href="https://www.facebook.com/AMBAAFTW/">AMBAA on Facebook</a></p>

          <img width="100" height="100" class="image right" src={logoEEA}/>
          <h3>East Auckland Eagle - Auckland</h3>
          <p>East eagle is a brand new team from experienced fighters, hosting their first tourney at Big Boy Toys.</p>
          <p>Contact: <a href="https://www.facebook.com/East-Auckland-Eagles-HMB-1638528559544108/">East Auckland Eagle HMB, on Facebook</a></p>

          <img width="100" height="100" class="image right" src={logoWAK}/>
          <h3>WAK - Waikato Armoured Combat</h3>
          <p>Strong ally of TAC, they won many trophies and regularly host the Tatoo Cup in Hamilton</p>
          <p>Contact: <a href="https://www.facebook.com/WAC.NZ/">Waikato Armoured Combat Inc., on Facebook</a></p>

          <img width="100" height="100" class="image right" src={logoTAK}/>
          <h3>TAC - Tauranga Armoured Combat</h3>
          <p>The strong Titans won many trophies and regularly host the Tatoo Cup in Tauranga</p>
          <p>Contact: <a href="https://www.facebook.com/The-Titans-Tauranga-Armoured-Combat-605664116209410">The Titans Tauranga, on Facebook</a></p>

          <img width="100" height="100" class="image right" src={logoST}/>
          <h3>Steel Thorns - Taranaki</h3>
          <p>This very unified veteran team is hosting the Ohura tournament. One of their fighter is hosting most of the NZ tournament, in Taupo</p>
          <p>Contact: <a href="https://www.facebook.com/steelthorns/">Steel Thorns, on Facebook</a></p>

          <img width="100" height="100" class="image right" src={logoRAC}/>
          <h3>Hornets - Rotorua</h3>
          <p>Maybe the newest team. Even without the number to gather a full team, they hosted the Sulphur City Clash.</p>
          <p>Contact: <a href="https://www.facebook.com/groups/141292349717438/">Hornets (RAC), on Facebook</a></p>

          <img width="100" height="100" class="image right" src={logoMAC}/>
          <h3>MAC - Manawatu Armoured Combat</h3>
          <p>One the newest and most active team, they start hosting up to 2 tournaments a year in Palmerston North</p>
          <p>Contact: <a href="https://www.facebook.com/manawatuarmouredcombat/">Manawatu Armoured Combat, on Facebook</a></p>

          <img width="100" height="100" class="image right" src={logoFelag}/>
          <h3>Felag - Wellington</h3>
          <p>They have grown to be the largest and strongest team in NZ, and train in Lower Hutt. They drive the important Levin tournament.</p>
          <p>Contact: <a href="https://www.facebook.com/FelagWellington">Felag "Wellington Medieval Armoured Combat", on Facebook</a></p>

          <h3>Start your team!</h3>
          <p>There are a couple of experienced fighters without team yet (Chatham Island, Christchurch, Whangarei, ...).
          So it is always possible to start a team, or join other fighters in a tournament.</p>
    </div>
    )
  }
}

export default NZPage