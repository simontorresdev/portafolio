import React from 'react'
import SEO from '../components/seo'
import { Presentación } from '../components/Presentacion'
import { Proyectos } from '../components/Proyectos'

const IndexPage = () => (
  <>
    <SEO title='Inicio' />
    <Presentación />
    <Proyectos />
  </>
)

export default IndexPage
