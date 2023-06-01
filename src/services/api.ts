import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Restaurant } from '../pages/Home'

type Product = {
  id: number
  price: number
}

type Address = {
  description: string
  city: string
  zipCode: string
  number: number
  complement?: string
}

type Card = {
  name: string
  number: string
  code: number
  expires: {
    month: number
    year: number
  }
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: Address
  }
  payment: {
    card: Card
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => 'restaurantes'
    }),
    getDishes: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantsQuery,
  useGetDishesQuery,
  usePurchaseMutation
} = api

export default api
