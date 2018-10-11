import React, { Component } from 'react';
import Edit from '../../../images/Edit_icon.png';
import Info from '../../../images/Info_icon.png'
import './topCard.css';

class TopCard extends Component {
  render() {
    return (
      <div>
        <div className="wrapper-top-card">
            <div className="section-a">
                Your Trip
            </div>
            <div className="section-b">
                5:45 <span className="clock">PM</span>
            </div>
            <div className="section-c">
                Estimated arrival at DFW int Airport - Terminal E
            </div>
            <div className="nested">
              <div><hr/></div>
              <div><hr/></div>
              <div><hr/></div>
              <div>Estimated Fare:<br/>$65 - $75
              <img className="info" src={Info} alt="info icon" />
              </div>
              <div>Passengers:<br/>1-5</div>
              <div>Payment:<br/>Amex01</div>
            </div>
            <div className="section-d">449 Flora St.<br/>Dallas,Texas 75201</div>
            <div className="hr2"><hr/></div>
            <div className="section-d-2">DFW International Airport<br/>American Airlines Terminal E <br/> Iving,Texas 75261</div>
            <div className="section-d">Can you drop me off at AA<br/>International Bag Drop Please?
            <img className="edit" src={Edit} alt="edit button"/>
            </div>
            <div className="btn">    <button className="btn1">CANCEL TRIP</button>
            </div>
        </div>
      </div>
    )
  }
}
export default TopCard;