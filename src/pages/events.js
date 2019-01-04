import React from 'react'

import hmbLogo from '../images/hmb-logo.png'
import imcfLogo from '../images/imcf.png'

class EventPage extends React.PureComponent {
  render() {
    return (
    <div>
          <h2 className="major">Upcoming Tourney</h2>
          <p align="center">
          <iframe src="https://hithredin.my.opendatasoft.com/explore/embed/dataset/bohurt-events/map/?sort=-date&q=date%3E%23now(months%3D-1)&location=4,-36,166&static=false&datasetcard=false&scrollWheelZoom=false" 
            width="450" height="550" frameborder="0">
          </iframe>
          </p>
    </div>
    )
  }
}

export default EventPage