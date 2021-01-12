import React from "react"
import Layout from "../components/ui/layout"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <>
    <Layout>
      <div className="notFound">
        <h1 className="notFound__title">404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <h2 className="notFound__title">
          Return <Link to="/">home!</Link>
        </h2>
      </div>
    </Layout>
  </>
)

export default NotFoundPage
