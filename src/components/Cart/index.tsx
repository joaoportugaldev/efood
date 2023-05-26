import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { open, close } from '../../store/reducers/cart'

import { Button } from '../Button'
import { CartContainer, Sidebar, Item, Imagem, Price } from './styles'
import marguerita from '../../assets/images/marguerita.png'
import lixeira from '../../assets/images/lixeira.svg'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => dispatch(close())

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <div className="overlay" onClick={() => closeCart()}></div>
      <Sidebar>
        <ul>
          <Item>
            <Imagem src={marguerita} alt="Pizza de Marguerita" />
            <div>
              <h4>Pizza Marguerita</h4>
              <p>R$60,90</p>
            </div>
            <button type="button">
              <img src={lixeira} alt="Botão de exluir produto" />
            </button>
          </Item>
        </ul>
        <Price>
          <span>Valor Total</span>
          <span>R$192,00</span>
        </Price>
        <Button
          type="button"
          title="Clique para continuar a compra"
          width="full"
        >
          Continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
