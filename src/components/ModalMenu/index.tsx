import { useDispatch, useSelector } from 'react-redux'

import { parseToBrl } from '../../utils'
import { Button } from '../Button'

import { closeModal as close } from '../../store/reducers/modal'
import { RootReducer } from '../../store'
import { add, open } from '../../store/reducers/cart'

import closeIcon from '../../assets/images/close.svg'
import * as S from './styles'

export interface ModalProps extends Dish {
  isOpen: boolean
}

const ModalMenu = () => {
  const dispatch = useDispatch()
  const openCart = () => dispatch(open())
  const closeModal = () => dispatch(close())

  const { nome, foto, descricao, porcao, preco, isOpen } = useSelector(
    (state: RootReducer) => state.modal
  )

  const dish = useSelector((state: RootReducer) => state.modal)

  const addToCart = () => dispatch(add(dish))

  const handleClick = () => {
    addToCart()
    openCart()
    closeModal()
  }

  return (
    <S.Modal isOpen={isOpen}>
      <S.Box className="container">
        <S.Close
          onClick={() => {
            closeModal()
          }}
        >
          <img src={closeIcon} alt="Botao de fechar" />
        </S.Close>
        <img src={foto} />
        <S.About>
          <h3>{nome}</h3>
          <p>{descricao}</p>
          <p>{porcao}</p>
          <Button
            title="Adicionar"
            type="button"
            onClick={() => {
              handleClick()
            }}
            width="fit"
          >
            {`Adicionar ao Carrinho - ${parseToBrl(preco)}`}
          </Button>
        </S.About>
      </S.Box>
      <div
        className="overlay"
        onClick={() => {
          closeModal()
        }}
      ></div>
    </S.Modal>
  )
}

export default ModalMenu
