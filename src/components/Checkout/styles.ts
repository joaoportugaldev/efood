import styled from 'styled-components'
import { ButtonContainer } from '../Button/styles'
import { colors } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

export const Container = styled.div`
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

export const InputGroup = styled.div<InputGroupProps>`
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
    border: 1px solid ${colors.white};
    background-color: ${colors.peach};
    padding: 0 8px;
    height: 32px;
    width: 100%;
    color: ${colors.black};
    font-size: 14px;
    font-weight: bold;
  }

  textarea {
    resize: none;
  }
`
