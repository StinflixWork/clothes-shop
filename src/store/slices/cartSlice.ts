import { createSlice } from '@reduxjs/toolkit'
import { IProduct } from 'interfaces/index.ts'

type TypeOrder = {
	product: IProduct
	selectSize: string
}

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
				? state.purchases.filter(product => product.product.id !== payload)
				: [...state.purchases, payload]
		}
	}
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer
