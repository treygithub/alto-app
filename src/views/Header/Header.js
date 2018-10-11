import React, { Component } from 'react';
import Logo from '../../images/Alto_logo.png';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <img src={Logo} className="header-img" alt="logo"/>
        </div>
      </div>
    )
  }
}
export default Header;