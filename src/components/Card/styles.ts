import styled from 'styled-components'
import { colors } from '../../styles'
import { Props } from '.'
import { ButtonLink } from '../Button/styles'

type CardProps = Pick<Props, 'typeDefault'>

export const Card = styled.div<CardProps>`
  position: relative;
  background-color: ${(props) =>
    props.typeDefault ? `${colors.white}` : `${colors.red}`};
  color: ${(props) =>
    props.typeDefault ? `${colors.red}` : `${colors.peach}`};
  cursor: ${(props) => (props.typeDefault ? 'auto' : 'pointer')};
  height: 100%;

  ${ButtonLink} {
    position: absolute;
    bottom: 8px;
    left: 8px;
  }
`

export const Image = styled.div<CardProps>`
  height: 217px;

  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: flex-end;
  margin: ${(props) => (props.typeDefault ? '0' : '8px 8px 0px 8px')};
`

export const AboutContainer = styled.div`
  padding: 8px;
  border: 1px solid ${colors.red};
  border-top-width: 0;
  height: calc(100% - 217px);
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  margin: 40px 0px;
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
