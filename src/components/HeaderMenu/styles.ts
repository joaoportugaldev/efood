import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 160px;
  padding: 64px 0px;

  img {
    max-width: 125px;
  }

  nav {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: fit-content;
    padding: 16px 0;

    nav {
      flex-direction: column;
    }
  }
`
export const HeaderLink = styled(Link)`
  text-decoration: none;
  color: ${colors.red};
  font-size: 18px;
  font-weight: 900;

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`

export const Cart = styled.div`
  color: ${colors.red};
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;
`
