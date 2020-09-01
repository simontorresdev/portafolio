import React from 'react'
import { StyledHeader } from './styles'
import Navbar from '../Navbar'
import { Logo } from '../Logo'
import { RedesSociales } from '../RedesSociales'
import { MenuResponsive } from '../MenuResponsive'

const Header = () => (
  <>
    <StyledHeader>

      <Logo />

      <Navbar />

      <RedesSociales />

    </StyledHeader>
    <MenuResponsive />
  </>
)

export default Header
