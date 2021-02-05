import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">DepSlipts</span>
        <span className="navbar-brand mb-0 h1">{this.props.userName}</span>
      </nav>
    );
  }
}

export default NavBar;
