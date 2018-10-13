import React, { Component } from 'react';
import './yourTrip.css';

class YourTrip extends Component {
  render() {
    return (
      <div>
      <div className="trip-wrapper-top">
        <div className="trip-img"></div>
      </div>
      <div className="driver-wrapper-btm">
          <div className="title">YOUR TRIP</div>
          <div className="section-b">
                5:39 <span className="clock">PM</span>
            </div>
            <div className="section-c">
                Estimated arrival at DFW int Airport - Terminal E
            </div>
          <div className="hr4"><hr/></div>
          <div className="content">Curent Vibe<br/><span className="content2">Vaporwave Beats</span></div>
          <div className="btn4"><button className="btn4">CHANGE VEHICLE VIBE</button></div>
      </div>
    </div>
    )
  }
}
export default YourTrip;