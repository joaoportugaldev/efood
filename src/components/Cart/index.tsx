import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, remove, openCheckout } from '../../store/reducers/cart'

import { getTotalPrice } from '../../utils'
import { formataPreco } from '../../utils'

import { Button } from '../Button'
import { CartContainer, Sidebar, Item, Imagem, Price } from './styles'

import lixeira from '../../assets/images/lixeira.svg'
import Checkout from '../Checkout'

const Cart = () => {
  const dispatch = useDispatch()

  const { isOpen, items, isCheckout } = useSelector(
    (state: RootReducer) => state.cart
  )

  const closeCart = () => dispatch(close())
  const removeItem = (id: number) => dispatch(remove(id))
  const goCheckout = () => dispatch(openCheckout())

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <div className="overlay" onClick={() => closeCart()}></div>
      <Sidebar>
        {!isCheckout ? (
          <>
            <ul>
              {items.map((item) => (
                <Item key={item.nome}>
                  <Imagem src={item.foto} alt="Pizza de Marguerita" />
                  <div>
                    <h4>{item.nome}</h4>
                    <p>{formataPreco(item.preco)}</p>
                  </div>
                  <button type="button" onClick={() => removeItem(item.id)}>
                    <img src={lixeira} alt="Botão de exluir produto" />
                  </button>
                </Item>
              ))}
            </ul>
            <Price>
              <span>Valor Total</span>
              <span>{formataPreco(getTotalPrice(items))}</span>
            </Price>
            <Button
              type="button"
              title="Clique para continuar a compra"
              width="full"
              onClick={() => goCheckout()}
            >
              Continuar com a compra
            </Button>
          </>
        ) : (
          <Checkout />
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
