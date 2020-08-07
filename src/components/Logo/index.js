import React from 'react'
import Image from '../image'
import { Link } from 'gatsby'
import { MyLogo, Column1, Column2 } from './styles'

export const Logo = () => {
  return (
    <Link to='/'>
      <MyLogo>

        <Column1>
          <Image name='code-280.png' />
        </Column1>

        <Column2>
          <Image name='simon.png' />
        </Column2>

      </MyLogo>
    </Link>
  )
}
