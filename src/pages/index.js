import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/accueil/hero"
import Statistique from "../components/accueil/statistique"
import Caracteristiques from "../components/accueil/caracteristiques"
import Testimonials from "../components/accueil/temoignage"
import Video from "../components/accueil/video"
import Ecole from "../components/accueil/ecole"
import Astuces from "../components/accueil/astuces"
import Partner from "../components/accueil/partner"
import Media from "../components/accueil/media"



const IndexPage = () => (
  <Layout>
    <Hero/>
    <Statistique/>
    <Caracteristiques/>
    <Testimonials/>
    <Video/>
    <Ecole/>
    <Astuces/>
    <Partner/>
    <Media/>
  </Layout>
)

export const Head = () => <Seo title="Mathscan ©" />

export default IndexPage
