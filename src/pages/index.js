import React from 'react'
import SEO from '../components/seo'
import { Presentación } from '../components/Presentacion'
import { Proyectos } from '../components/Proyectos'

const IndexPage = () => (
  <>
    <SEO title='Inicio' />
    <Presentación boton imagen='fondoHome.png' />
    <Proyectos />
  </>
)

export default IndexPage
