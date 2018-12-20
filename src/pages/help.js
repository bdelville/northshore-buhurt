import React from 'react'

import pic05 from '../images/pic05.jpg'

class HelpPage extends React.PureComponent {
  render() {
    return (
    <div>
          <h2 className="major">Get started</h2>
          <span className="image main"><img src={pic05} alt="" /></span>
          <p>TODO: interesting websites, training videos, basic how to order first armour</p>
    </div>
    )
  }
}

export default HelpPage