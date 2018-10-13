import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import Power from '../../images/Vibes_icon.png';
import Profile from '../../images/Profile_icon.png';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer-wrapper">
            <div className="footer-a">
            <Link to='/YourDriver'>
            <img src={Profile} className="profile-img" alt="profile pic"/>
            </Link>
            </div>
            <div className="footer-b">
            <Link to='/YourTrip'>
                DFW Int'l Airport<br/>ETA 5:39 PM <hr className="hr3"/>
            </Link>
            </div>
            <div className="footer-c">
            <Link to='/YourVehicle'>
            <img src={Power} className="power-img" alt="power button pic"/>
            </Link>
            </div>
        </div>
      </div>
    )
  }
}
export default Footer;