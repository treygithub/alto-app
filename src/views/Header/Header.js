import React, { Component } from 'react';
import Logo from '../../images/Alto_logo.png';
import Nav from '../../images/Kabob_nav.png';
import './header.css';

class Header extends Component {
  render() {
    return (
        <div className="wrapper">
          <div className="header-img">
            <img src={Logo} className="h-img" alt="logo"/>
          </div>
          <div className="nav">
            <img src={Nav} alt="navigation"/>
          </div>
        </div>
    )
  }
}
export default Header;