import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const CartContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;

  &.is-open {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    height: 100%;
    width: 100%;
  }
`

export const Sidebar = styled.aside`
  max-width: 360px;
  width: 100%;
  padding: 32px 8px 0px 8px;
  background-color: ${colors.red};
  color: ${colors.peach};
  z-index: 1;

  .empty_cart-text {
    font-size: 14px;
    line-height: 22px;
    text-align: center;
  }

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 300px;
  }
`

export const Item = styled.li`
  position: relative;
  background-color: ${colors.peach};
  color: ${colors.red};
  display: flex;
  font-size: 14px;
  margin-top: 16px;

  button {
    border: none;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }

  h4 {
    font-size: 18px;
    font-weight: bolder;
    margin-top: 8px;
    margin-bottom: 16px;
  }

  p {
    line-height: 22px;
  }
`

export const Imagem = styled.img`
  object-fit: cover;
  margin: 8px;
  width: 80px;
  height: 80px;
`

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;
  font-weight: bold;
`
