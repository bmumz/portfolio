import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <div>
    <Layout />
    <div className="notFound">
      <h1 className="notFound__title">404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <h2 className="notFound__title">
        Return <Link to="/">home!</Link>
      </h2>
    </div>
  </div>
)

export default NotFoundPage
