import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"


import Formules from '../components/tarifs-component/formules'
import Pricing from '../components/tarifs-component/pricing'
import Partner from '../components/accueil/partner'
import Media from '../components/accueil/media'


export default function Tarifs() {
  return (
    <Layout page='pricing'>
        <Formules/>
        <Pricing/>
        <Partner/>
        <Media/>
    </Layout>
  )
}


export const Head = () => <Seo title="Mathscan ©" />
