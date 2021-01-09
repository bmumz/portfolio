import React from "react"
import Seo from "./seo"
import Header from "./header"
import Footer from "./footer/footer"

const Layout = ({ children, keywords }) => (
  <>
    <Seo keywords={keywords} />
    <div className="layout__main">
      <Header />
      {children}
    </div>
    <div className="layout__footer">
      <Footer />
    </div>
  </>
)

export default Layout
