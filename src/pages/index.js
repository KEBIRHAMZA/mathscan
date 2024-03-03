import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Statistique from "../components/statistique"
import Caracteristiques from "../components/caracteristiques"
import Testimonials from "../components/temoignage"
import Video from "../components/video"
import Ecole from "../components/ecole"
import Astuces from "../components/astuces"



const IndexPage = () => (
  <Layout>
    <Hero/>
    <Statistique/>
    <Caracteristiques/>
    <Testimonials/>
    <Video/>
    <Ecole/>
    <Astuces/>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
