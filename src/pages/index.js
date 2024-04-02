import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/accueil/hero"
import Statistique from "../components/accueil/statistique"
import Caracteristiques from "../components/accueil/caracteristiques"
import Ecole from "../components/accueil/ecole"
import Astuces from "../components/accueil/astuces"
import Partner from "../components/accueil/partner"
import Media from "../components/accueil/media"
import Temoignages from "../components/accueil/temoignages"
import Temoignagevideo from "../components/accueil/temoignagevideo"



const IndexPage = () => (
  <Layout>
    <Hero/>
    <Statistique/>
    <Caracteristiques/>
    <Ecole/>
    <Temoignagevideo/>
    <Temoignages/>
    <Astuces/>
    <Partner/>
    <Media/>
  </Layout>
)

export const Head = () => <Seo title="Mathscan ©" />

export default IndexPage
