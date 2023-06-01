import * as S from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string | JSX.Element
  width?: 'full' | 'fit'
  marginTop?: string
  disabled?: boolean
}

export const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  width = 'full',
  marginTop = '0',
  disabled
}: Props) => {
  if (type === 'button') {
    return (
      <S.ButtonContainer
        type="button"
        title={title}
        onClick={onClick}
        width={width}
        marginTop={marginTop}
        disabled={disabled}
      >
        {children}
      </S.ButtonContainer>
    )
  }

  return (
    <S.ButtonLink to={to as string} title={title}>
      {children}
    </S.ButtonLink>
  )
}
