/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import Navbar from "./accueil/navbar"
import Footer from "./accueil/footer"

const Layout = ({ children,page }) => {

  return (
    <>
    <Navbar page={page}/>
      
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <Footer/>
      </div>
    </>
  )
}

export default Layout
