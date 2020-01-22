import React from 'react'

import nzBanner from '../images/header-northshore.jpg'

import logoHMBNZ from '../images/logo-hmbnz.png'
import logoNZFCMC from '../images/logo-nzfcmc.jpg'

import logoAAC from '../images/logo-aac.png'
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

        <h2 className="major">NZ Federations</h2>
        <h3>HMBNZ: represent HMB in New Zealand</h3>
        <p>Contact: <a href="https://www.facebook.com/groups/581930541906560/">HMBNZ on Facebook</a></p>
        <br/>

        <h3>NZFCMC: represent IMCF in New Zealand</h3>
        <p>Contact: <a href="https://www.facebook.com/groups/nzfcmc/">NZFCMC on Facebook</a></p>
        <br/>
         
        <h2 className="major">Teams from North to South</h2>

        <img width="100" height="100" className="image left" src={logoAAC}/>
        <h3>AAC: Auckland</h3>
        <p>Contact: <a href="https://www.facebook.com/AAC/">Auckland Armoured Combat on Facebook</a></p>
        <br/>

        <img width="100" height="100" className="image left" src={logoWAK}/>
        <h3>WAC - Hamilton</h3>
        <p>Contact: <a href="https://www.facebook.com/WAC.NZ/">Waikato Armoured Combat Inc., on Facebook</a></p>
        <br/>

        <img width="100" height="100" className="image left" src={logoTAK}/>
        <h3>TAC: Tauranga</h3>
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
          Whangarei, ...). So it is always possible to start a team, or join other fighters in a tournament.
          For getting in touch, just reach the federation or the team around you.
        </p>


      </div>
    )
  }
}

export default NZPage