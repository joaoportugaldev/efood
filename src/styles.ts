import { createGlobalStyle } from 'styled-components'

export const colors = {
  peach: '#FFEBD9',
  white: '#FFFFFF',
  red: '#E66767',
  skin: '#fff8f2',
  black: '#4B4B4B'
}

export const breakpoints = {
  mobile: '767px',
  tablet: '1023px'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.peach};
    color: ${colors.red};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media(max-width: ${breakpoints.tablet}) {
      max-width: 80%;
    }
  }
`
