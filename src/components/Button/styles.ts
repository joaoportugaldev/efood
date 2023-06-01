import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'
import { Props } from '.'

type ButtonProps = Pick<Props, 'width' | 'marginTop'>

export const ButtonLink = styled(Link)`
  color: ${colors.white};
  background-color: ${colors.red};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  text-decoration: none;
  display: inline-block;
`

export const ButtonContainer = styled.button<ButtonProps>`
  color: ${colors.red};
  background-color: ${colors.peach};
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
  cursor: pointer;
  border: none;
  width: ${(props) => (props.width === 'full' ? '100%' : 'fit-content')};
  margin-top: ${(props) => props.marginTop || '0'};
`
