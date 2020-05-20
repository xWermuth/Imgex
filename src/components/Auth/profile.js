import React, { Component } from "react"
import jwt_decode from "jwt-decode"

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      password: "",
    }
  }

  componentDidMount() {
    const token = localStorage.user_token
    const decoded = jwt_decode(token)
    this.setState({
      name: decoded.name,
      password: decoded.password,
    })
  }

  render() {
    return (
      <div className="container">
        <div className="jumbutron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Profile</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Username</td>
                <td>{this.state.name}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Profile
