import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyles'

export const StyledHeader = styled.header`
  background: ${colors.bgNavbar};
  height: 100vh;
  width: 220px;
  position: fixed;
  top: 0;
  left: 0;
  border-right: 1px solid ${colors.borde};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1025px) {
    display: none;
  }
`
export const ContenedorLogo = styled.div`
  padding: 24px;
  & .gatsby-image-wrapper{
    width: 125px;
  }
`
export const ContenedorRedes = styled.nav`
  padding: 24px;
  display: flex;
  justify-content: space-evenly;
  & li{
    list-style: none;
  }
  & svg{
    width: 25px;
    height: 25px;
  }
`
