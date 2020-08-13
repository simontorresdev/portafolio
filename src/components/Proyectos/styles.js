import styled, { css } from 'styled-components'
// import { colors } from '../../styles/GlobalStyles'

export const ContenedorProyectos = styled.section`
  max-width: 1180px;
  margin: 30px auto 0 auto;
  & > h2 {
    font-size: 22px;
    font-weight: 600;
    padding-bottom: 24px;
  }
  ${props => props.pageProject && css` 
    margin: 0 auto;
    & > h2 {
      display: none;
    }
    @media (max-width: 1025px) {
      & > h2 {
        display: block;
      }
    }
  `}
`
export const GridProjects = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  @media (max-width: 1025px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
