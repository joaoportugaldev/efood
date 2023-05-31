import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

type InputContainerProps = {
  maxWidth?: string
}

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
  background-color: ${colors.vermelho};
  color: ${colors.pessego};
  z-index: 1;
`

export const Item = styled.li`
  position: relative;
  background-color: ${colors.pessego};
  color: ${colors.vermelho};
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

export const FormContainer = styled.div`
  margin-top: 32px;
  margin-bottom: 24px;

  h2 {
    font-size: 16px;
    margin-bottom: 16px;
  }

  .number-inputs {
    display: flex;
    justify-content: space-between;
  }

  ${ButtonContainer} {
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin: 16px 0px 24px 0px;
  }
`

export const InputContainer = styled.div<InputContainerProps>`
  flex: auto;
  font-weight: bold;
  margin-bottom: 8px;
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    display: block;
    font-size: 14px;
    margin-bottom: 8px;
  }

  input,
  textarea {
    border: 1px solid ${colors.branco};
    background-color: ${colors.pessego};
    padding: 0 8px;
    height: 32px;
    width: 100%;
    color: ${colors.preto};
    font-size: 14px;
    font-weight: bold;
  }

  textarea {
    resize: none;
  }
`
