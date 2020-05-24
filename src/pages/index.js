import React, { Component } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import AuthApp from "../components/Auth/authApp";
import { Login } from "../components/Auth/auth_app";
import Image from "../components/image";
import SEO from "../components/seo";
import Navbar from "../components/header/navbar";
import { render } from "react-dom";

class Feed extends Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    // window.addEventListener("load", generateFeeds);
  }

  generateFeeds() {
    return <div className="tesint">hejsa</div>;
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <Navbar />

        {/* <AuthApp /> */}

        {/* <Login /> */}

        <div className="feed-container"></div>

        <Link to="/login/">Go to page 2</Link>
      </Layout>
    );
  }
}

export default Feed;
