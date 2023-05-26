import { useDispatch, useSelector } from 'react-redux'

import { closeModal } from '../../store/reducers/modal'

import { Button } from '../Button'
import * as S from './styles'
import closeIcon from '../../assets/images/close.svg'
import { RootReducer } from '../../store'

export type ModalProps = {
  title: string
  image: string
  description: string
  porcao: string
  price: string
  isOpen: boolean
}

const ModalMenu = () => {
  const dispatch = useDispatch()
  const { title, image, description, porcao, price, isOpen } = useSelector(
    (state: RootReducer) => state.modal
  )

  const handleClick = () => {
    dispatch(closeModal())
  }

  return (
    <S.Modal isOpen={isOpen}>
      <S.Box className="container">
        <S.Close
          onClick={() => {
            handleClick()
          }}
        >
          <img src={closeIcon} alt="Botao de fechar" />
        </S.Close>
        <img src={image} />
        <S.About>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>{porcao}</p>
          <Button title="Adicionar" type="button" width="fit">
            {`Adicionar ao Carrinho - ${price}`}
          </Button>
        </S.About>
      </S.Box>
      <div
        className="overlay"
        onClick={() => {
          handleClick()
        }}
      ></div>
    </S.Modal>
  )
}

export default ModalMenu
