import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"


import Exceller from '../components/parents-component/exceller'
import Astuces from "../components/accueil/astuces"
import Cardsparent from '../components/parents-component/cardsparent'
import Testimonials from "../components/accueil/temoignage"
import Video from "../components/accueil/video"
import Partner from "../components/accueil/partner"
import Media from '../components/accueil/media'


export default function Parents() {
  return (
    <Layout>
      <Exceller/>
      <Astuces/>
      <Cardsparent/>
      <Testimonials/>
      <Video/>
      <Partner/>
      <Media/>
    </Layout>
  )
}

export const Head = () => <Seo title="Mathscan ©" />

