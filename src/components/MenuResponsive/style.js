import styled from 'styled-components'
// import { colors } from '../../styles/GlobalStyles'

export const ContainerMenuResponsive = styled.nav`
  background: #191922;
  position: fixed;
  height: 52px;
  width: 100%;
  bottom: 0%;
  left: 0%;
  z-index: 1000;
  display: none;
  @media (max-width: 1025px) {
    display: block;
  }
`
