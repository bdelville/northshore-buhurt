import React from 'react'

import headerImg from '../images/pic05.jpg'

class HelpPage extends React.PureComponent {
  render() {
    return (
      <div>
        <h2 className="major">Get started</h2>
        <span className="image main"><img src={headerImg} alt=""/></span>

        <h3>Starting</h3>
        <p>To get your mind, the best thing to do is watching some video, then come to one of the tournament in NZ.
          Don't be shy and show your interest once there, one of our main objective is the growth of the sport!</p>

        <p>Some great source of videos to watch:</p>
        <ul>
          <li><a href="https://www.youtube.com/user/WMFCRussia">WFMC knights channel with many fights from Russia</a>
          </li>
          <li><a href="https://www.youtube.com/channel/UCyobEXFvKBsW274v0wSafNg">Buhurt Tech channel</a></li>
          <li><a href="https://www.youtube.com/channel/UC4bRYf6nhkqM3UdRQ7AdoFA">All the fights from New Zealand!</a>
          </li>
          <li><a href="https://www.youtube.com/user/FranceMedieval">France buhurt channel to see fights in another
            country</a></li>
        </ul>

        <h3>Training</h3>
        <p><a href="https://www.youtube.com/channel/UCdPqCP5Ze0O4bwJrqgcTm7A">Ukulov's youtube channel</a> is a great
          source from a professional fighter</p>

        <h3>Equipment</h3>
        <p>There are as many preferences on armour as there are fighters</p>
        <p>The best way to settle is watching fights, talk to people and define your preferences.
          Then you can decide a historical region and time (XIV to XVI), and stick to it to compose your favorite
          armour.
        </p>
        <p>Choosing a blacksmith come last, and again, the best way to choose is asking for advises from veterans.</p>

      </div>
    )
  }
}

export default HelpPage