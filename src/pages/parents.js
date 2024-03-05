import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"


import Exceller from '../components/parents-component/exceller'
import Astuces from "../components/accueil/astuces"
import Cardsparent from '../components/parents-component/cardsparent'



export default function Parents() {
  return (
    <Layout>
      <Exceller/>
      <Astuces/>
      <Cardsparent/>
    </Layout>
  )
}

export const Head = () => <Seo title="Mathscan ©" />

