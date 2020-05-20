import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import AuthApp from "../components/Auth/authApp"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <AuthApp />

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
