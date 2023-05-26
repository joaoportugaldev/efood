import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ModalProps } from '../../components/ModalMenu'
import { Prato } from '../../pages/Home'

const initialState: ModalProps = {
  title: '',
  image: '',
  description: '',
  porcao: '',
  price: '',
  isOpen: false
}

const formataPreco = (preco: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<Prato>) => {
      state.title = action.payload.nome
      state.image = action.payload.foto
      state.description = action.payload.descricao
      state.porcao = action.payload.porcao
      state.price = formataPreco(action.payload.preco)
      state.isOpen = true
    },
    closeModal: (state) => {
      state.title = ''
      state.image = ''
      state.description = ''
      state.porcao = ''
      state.isOpen = false
    }
  }
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer
