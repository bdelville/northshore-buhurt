import React from 'react'

class EventPage extends React.Component {

    constructor() {
        super();
        this.state = {
            mapWidth: 450,
            mapHeight: 550
        }
    }

  componentDidUpdate(prevProps, prevState) {
    const articleContainer = document.getElementById('main');
    const mapWidth = articleContainer.clientWidth - 70;
    if (this.state.mapWidth !== mapWidth) {
      this.setState({ mapWidth });
      console.log(articleContainer.clientHeight);
    }
  }

  render() {
    return (
    <div>
          <h2 className="major">Upcoming Tourneys</h2>
          <p align="center">
          <iframe src="https://hithredin.my.opendatasoft.com/explore/embed/dataset/bohurt-events/map/?sort=-date&q=date%3E%23now(months%3D-1)&location=4,-36,166&static=false&datasetcard=false&scrollWheelZoom=false" 
            width={this.state.mapWidth} height="550" frameborder="0" title="Open Data Soft events map">
          </iframe>
          </p>

          <p><i>The map of events is self maintained, as part of the Buhurt App project. 
          It might not be accurate and the data is for information only</i></p>
    </div>
    )
  }
}

export default EventPage