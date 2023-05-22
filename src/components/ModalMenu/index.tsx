import { Button } from '../Button'
import * as S from './styles'
import close from '../../assets/images/close.svg'

export type Props = {
  title: string
  image: string
  description: string
  isVisible: boolean
  onClose: () => void
}

const ModalMenu = ({
  title,
  image,
  description,
  isVisible,
  onClose
}: Props) => (
  <S.Modal isVisible={isVisible}>
    <S.Box className="container">
      <S.Close onClick={onClose}>
        <img src={close} alt="Botao de fechar" />
      </S.Close>
      <img src={image} />
      <S.About>
        <h3>{title}</h3>
        <p>{description}</p>
        <Button title="Adicionar" type="button" width="fit">
          <span>
            Adicionar ao Carrinho - <span>R$60,90</span>
          </span>
        </Button>
      </S.About>
    </S.Box>
    <div className="overlay" onClick={onClose}></div>
  </S.Modal>
)

export default ModalMenu
