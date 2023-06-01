import styled from 'styled-components'
import { colors } from '../../styles'
import { ModalProps as P } from '.'

type ModalProps = Pick<P, 'isOpen'>

export const Modal = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  display: ${(props) => (props.isOpen ? 'flex' : 'none')};

  align-items: center;
  justify-content: center;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const Box = styled.li`
  z-index: 1;
  position: relative;
  background-color: ${colors.red};
  color: ${colors.peach};
  padding: 32px;
  display: flex;
  gap: 24px;

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    margin: 16px 0px;
  }

  > img {
    object-fit: cover;
    height: 280px;
    width: 280px;
  }
`

export const Close = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`

export const About = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Tags = styled.div`
  display: flex;
  margin-top: 16px;
  margin-right: 16px;
`

export const Rate = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
