import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string | JSX.Element
  width?: 'full' | 'fit'
  marginTop?: string
}

export const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  width = 'full',
  marginTop = '0'
}: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        type="button"
        title={title}
        onClick={onClick}
        width={width}
        marginTop={marginTop}
      >
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}
