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
import logoStags from '../images/logo-stags.png'

class NZPage extends React.PureComponent {
  render() {
    return (
      <div>
        <h2 className="major">Buhurt in NZ</h2>
        <span className="image main"><img src={nzBanner} alt=""/></span>
        <p>Existing teams of New Zealand, from North to South:</p>

        <img width="100" height="100" className="image left" src={logoBCoy}/>
        <h3>B Company - Auckland</h3>
        <p>Contact: <a href="https://www.facebook.com/AMBAAFTW/">AMBAA on Facebook</a></p>
        <br/>

        <img width="100" height="100" className="image left" src={logoEEA}/>
        <h3>East Auckland Eagle - Auckland</h3>
        <p>Contact: <a href="https://www.facebook.com/East-Auckland-Eagles-HMB-1638528559544108/">East Auckland Eagle
          HMB, on Facebook</a></p>
        <br/>

        <img width="100" height="100" className="image left" src={logoWAK}/>
        <h3>WAK - Hamilton</h3>
        <p>Contact: <a href="https://www.facebook.com/WAC.NZ/">Waikato Armoured Combat Inc., on Facebook</a></p>
        <br/>

        <img width="100" height="100" className="image left" src={logoTAK}/>
        <h3>Titans - Tauranga</h3>
        <p>Contact: <a href="https://www.facebook.com/The-Titans-Tauranga-Armoured-Combat-605664116209410">The Tauranga
          Armoured Combat, on Facebook</a></p>
        <br/>

        <img width="100" height="100" className="image left" src={logoST}/>
        <h3>Steel Thorns - Taranaki</h3>
        <p>Contact: <a href="https://www.facebook.com/steelthorns/">Steel Thorns, on Facebook</a></p>
        <br/>

        <img width="100" height="100" className="image left" src={logoRAC}/>
        <h3>Hornets - Rotorua</h3>
        <p>Contact: <a href="https://www.facebook.com/groups/141292349717438/">Rotorua armoured combat, on Facebook</a>
        </p>
        <br/>

        <img width="100" height="100" className="image left" src={logoMAC}/>
        <h3>MAC - Palmerston North</h3>
        <p>Contact: <a href="https://www.facebook.com/manawatuarmouredcombat/">Manawatu Armoured Combat, on Facebook</a>
        </p>
        <br/>

        <img width="100" height="100" className="image left" src={logoStags}/>
        <h3>Stags - Lower Hutt</h3>
        <p>Contact: <a href="https://www.facebook.com/Stags-209918573292780/">Stags "Full contact medieval fighting
          team", on Facebook</a></p>
        <br/>

        <img width="100" height="100" className="image left" src={logoFelag}/>
        <h3>Felag - Wellington</h3>
        <p>Contact: <a href="https://www.facebook.com/FelagWellington">Felag "Wellington Medieval Armoured Combat", on
          Facebook</a></p>
        <br/>

        <h3>Join a team!</h3>
        <p>There are a couple of isolated and experienced fighters without team yet (Chatham Island, Christchurch,
          Whangarei, ...). So it is always possible to start a team, or join other fighters in a tournament.</p>
      </div>
    )
  }
}

export default NZPage