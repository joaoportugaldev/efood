import styled from 'styled-components'
import { colors } from '../../styles'

export const StyledFooter = styled.footer`
  height: 298px;
  width: 100%;
  background-color: ${colors.peach};
  padding: 40px 0px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 125px;
  }

  ul {
    display: flex;
    gap: 8px;
    margin-top: 32px;
    margin-bottom: 80px;
  }
`
