import React from 'react'

import pic02 from '../images/pic02.jpg'

class WorldPage extends React.PureComponent {
  render() {
    return (
    <div>
          <h2 className="major">World Federations</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>TODO describe IMCF, HMB, AMC, WFCMC, ...</p>
          <p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
    </div>
    )
  }
}

export default WorldPage