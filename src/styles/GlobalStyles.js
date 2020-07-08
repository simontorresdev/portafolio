import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  blanco: '#ffffff',
  background: '#121216',
  bgNavbar: '#191922',
  borde: '#32323d',
  rojo: '#d74b5c'
}

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    };
    html {
    }
    body{
        background: #121216;
        color: ${colors.blanco};
        font-family: 'Montserrat';
        padding: 50px;
    }
    main{
        margin-left: 220px;
    }
`
export const Boton = styled.button`
  
`
