import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles'

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
`
export const HeaderLink = styled(Link)`
  text-decoration: none;
  color: ${colors.vermelho};
  font-size: 18px;
  font-weight: 900;
`

export const Cart = styled.div`
  color: ${colors.vermelho};
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;
`
