import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"


import Exceller from '../components/parents-component/exceller'
import Astuces from "../components/accueil/astuces"
import Cardsparent from '../components/parents-component/cardsparent'
import Partner from "../components/accueil/partner"
import Media from '../components/accueil/media'
import Temoignages from '../components/accueil/temoignages'


export default function Parents() {
  return (
    <Layout>
      <Exceller/>
      <Astuces/>
      <Cardsparent/>
      <Temoignages/>
      <Partner/>
      <Media/>
    </Layout>
  )
}

export const Head = () => <Seo title="Mathscan ©" />

