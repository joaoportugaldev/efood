import { StyledTag } from './styles'

type TagProps = {
  children: string
}

export const Tag = ({ children }: TagProps) => <StyledTag>{children}</StyledTag>
