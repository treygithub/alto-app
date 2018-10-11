import React, { Component } from 'react';
import Power from '../../images/Vibes_icon.png';
import Profile from '../../images/Profile_icon.png';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer-wrapper">
            <div className="footer-a">
            <img src={Profile} className="profile-img" alt="profile pic"/>
            </div>
            <div className="footer-b">
                DFW Int'l Airport<br/>ETA 5:39 PM <hr className="hr3"/>
            </div>
            <div className="footer-c">
            <img src={Power} className="Power-img" alt="power button pic"/>
            </div>
        </div>
      </div>
    )
  }
}
export default Footer;