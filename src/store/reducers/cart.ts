import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Prato } from '../../pages/Home'

type CartState = {
  items: Prato[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Prato>) => {
      const plate = state.items.find((plate) => plate.id === action.payload.id)

      if (!plate) {
        state.items.push(action.payload)
      } else {
        alert('Esse prato já foi adicionado')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export default cartSlice.reducer
export const { add, open, close, remove } = cartSlice.actions
