import React, { Component } from 'react';
import './yourDriver.css';

class YourDriver extends Component {
  render() {
    return (
        <div>
          <div className="driver-wrapper-top">
            <div className="driver-img"></div>
          </div>
          <div className="driver-wrapper-btm">
              <div className="title">YOUR DRIVER</div>
              <div className="driver-name">Steph</div>
              <div className="hr2"><hr/></div>
              <div className="content">Steph Festiculma is a graduate of Parsons New School in New York and fluent in Portugeuse, Spanish and English. Steph has been driving with Alto since 2018.</div>
              <div className="btn"><button className="btn1">CONTACT DRIVER</button></div>
          </div>
        </div>
    )
  }
}
export default YourDriver;