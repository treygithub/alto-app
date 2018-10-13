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
              <div className="title">YOUR VEHICLE</div>
              <div className="driver-name">Alto 09</div>
                <div className="nested2">
                    <div><hr/></div>
                    <div><hr/></div>
                    <div>Make/Model<br/><span className="bold">2019 Volkswagen Atlas</span>
                    </div>
                    <div>Color<br/><span className="bold">Pure White</span>
                </div>
            </div>
              <div className="btn"><button className="btn1">CONTACT DRIVER</button></div>
          </div>
        </div>
    )
  }
}
export default YourVehicle;