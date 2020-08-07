import styled from 'styled-components'

export const MyLogo = styled.div`
  padding: 24px;
  display: flex;
  align-items: flex-end;
  & .gatsby-image-wrapper{
    width: 30px;
    object-fit: cover;
    border-radius: 5px;
  }
`

export const Column1 = styled.div`
`

export const Column2 = styled.div`
  padding-left: 5px;
  & .gatsby-image-wrapper{
    width: 110px;
  }
`
