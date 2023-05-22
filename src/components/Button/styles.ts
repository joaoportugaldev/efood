import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'
import { Props } from '.'

type ButtonProps = Pick<Props, 'width'>

export const ButtonLink = styled(Link)`
  color: ${colors.branco};
  background-color: ${colors.vermelho};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
  display: inline-block;
`

export const ButtonContainer = styled.button<ButtonProps>`
  color: ${colors.vermelho};
  background-color: ${colors.pessego};
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
  cursor: pointer;
  border: none;
  width: ${(props) => (props.width === 'full' ? '100%' : 'fit-content')};
`
