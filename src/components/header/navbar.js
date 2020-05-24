import React, { Component } from "react";
// import "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css";
import "./navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav-wrapper">
        <div className="nav-container"></div>
      </div>
    );
  }
}

export default Navbar;
