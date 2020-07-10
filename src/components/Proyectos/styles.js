import styled from 'styled-components'
// import { colors } from '../../styles/GlobalStyles'

export const ContenedorProyectos = styled.section`
  max-width: 1180px;
  margin: 30px auto 0 auto;
  h2 {
    font-size: 22px;
    font-weight: 600;
    padding-bottom: 24px;
  }
`
export const GridProjects = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
`
