import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ModalProps } from '../../components/ModalMenu'

const initialState: ModalProps = {
  nome: '',
  descricao: '',
  foto: '',
  id: 0,
  preco: 0,
  porcao: '',
  isOpen: false
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<Dish>) => {
      state.nome = action.payload.nome
      state.foto = action.payload.foto
      state.descricao = action.payload.descricao
      state.porcao = action.payload.porcao
      state.preco = action.payload.preco
      state.isOpen = true
    },
    closeModal: (state) => {
      state.nome = ''
      state.foto = ''
      state.descricao = ''
      state.porcao = ''
      state.isOpen = false
    }
  }
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer
