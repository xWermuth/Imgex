import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import Login from "./login/login.js"
import Profile from "./profile"

class AuthApp extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <Router exact path="/" component={Landing} */}

          <div className="container">
            {/* <Route exact path="./registration" /> */}
            <Route exact path="/" component={Login} />
          </div>
        </div>
      </Router>
    )
  }
}

export default AuthApp
