import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import Logo from '../../images/Alto_logo.png';
import Nav from '../../images/Kabob_nav.png';
import './header.css';

class Header extends Component {
  render() {
    return (
        <div className="wrapper">
          <div className="header-img">
            <Link to="/"><img src={Logo} className="h-img" alt="logo"/></Link>
          </div>
          <div className="nav">
            <img src={Nav} alt="navigation"/>
          </div>
        </div>
    )
  }
}
export default Header;