import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyles'

export const Menu = styled.nav`
  & li{
    list-style: none;
    list-style: none;
    font-size: 14px;
    margin-bottom: 25px;
    font-weight: 700;
  }
  & li svg{
    width: 22px;
    height: 22px;
  }
  & li a{
    display: flex;
    color: #fff;
    text-decoration: none;
    padding: 3px 24px;
    border-left: 4px solid transparent;
  }
  & li a span{
    margin-left: 12px;
    transition: .3s;
    text-transform: uppercase;
  }
  & li svg path{
    fill: ${colors.blanco};
    transition: .3s;
  }
  & li a.active{
    border-left: 4px solid ${colors.rojo};
  }
  & li a.active svg path,
  & li:hover svg path{
    fill: ${colors.rojo};
  }
  & li a.active span,
  & li:hover span{
    color: ${colors.rojo};
  }
`
