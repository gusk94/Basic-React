import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <ul>
          <li><Link to="/cat">Cat</Link></li>
          <li><Link to="/dog">Dog</Link></li>
        </ul>
      </div>
    )
  }
}

export default Header;
