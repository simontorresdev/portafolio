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
