import { createSlice } from '@reduxjs/toolkit'
import { TypeOrder } from 'types/index..ts'

type TypeInitialCart = {
	purchases: TypeOrder[]
}
const initialCart: TypeInitialCart = {
	purchases: []
}

const cartSlice = createSlice({
	name: 'cart',
	initialState: initialCart,
	reducers: {
		addToCart: (state, { payload }) => {
			const isProductInCart = state.purchases.some(
				product => product.product.id === payload.id
			)

			state.purchases = isProductInCart
				? state.purchases.filter(purchase => purchase.product.id !== payload)
				: [...state.purchases, payload]
		}
	}
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer
