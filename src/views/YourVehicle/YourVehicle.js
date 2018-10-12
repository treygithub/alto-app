import React, { Component } from 'react';
import './yourVehicle.css';
import Car from '../../images/Vehicle_photo.png' 

class YourVehicle extends Component {
  render() {
    return (
        <div>
          <div className="YourVehicle-wrapper-top">
            <div className="car-img">
            <img src={Car} alt="car" className="car"/>
            </div>
          </div>
          <div className="driver-wrapper-btm">
              <div className="title">YOUR DRIVER</div>
              <div className="driver-name">Alto 09</div>
                <div className="nested">
                    <div><hr/></div>
                    <div><hr/></div>
                    <div>Estimated Fare:<br/><span className="bold">$65 - $75</span>
                    </div>
                    <div>Passengers:<br/><span className="bold">1-5</span>
                </div>
            </div>
              <div className="btn"><button className="btn1">CONTACT DRIVER</button></div>
          </div>
        </div>
    )
  }
}
export default YourVehicle;