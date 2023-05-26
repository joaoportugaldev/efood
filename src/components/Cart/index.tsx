import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { getTotalPrice } from '../../utils'

import { Button } from '../Button'
import { CartContainer, Sidebar, Item, Imagem, Price } from './styles'

import lixeira from '../../assets/images/lixeira.svg'
import { formataPreco } from '../../utils'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => dispatch(close())
  const removeItem = (id: number) => dispatch(remove(id))

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <div className="overlay" onClick={() => closeCart()}></div>
      <Sidebar>
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
        >
          Continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
