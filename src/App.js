import React, { Component } from 'react';
import './css/font-familes.css';
import Header from './views/Header/Header';
import Footer from './views/Footer/Footer'
// import Nav from './Component/Nav/Nav';
import routes from './routes';
import { withRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          {/* {this.props.location.pathname !== "/" && <Nav />} */}
        {routes}
        <Footer/>
      </div>
    );
  }
}

export default withRouter(App);