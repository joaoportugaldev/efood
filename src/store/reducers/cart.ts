import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type CartState = {
  items: Dish[]
  isOpen: boolean
  isCheckout: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  isCheckout: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Dish>) => {
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
    },
    clean: (state) => {
      state.items = []
    },
    openCheckout: (state) => {
      state.isCheckout = true
    },
    closeCheckout: (state) => {
      state.isCheckout = false
    }
  }
})

export default cartSlice.reducer
export const { add, open, close, remove, openCheckout, closeCheckout, clean } =
  cartSlice.actions
