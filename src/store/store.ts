import { configureStore } from '@reduxjs/toolkit'
import catalogReducer from 'slices/catalogSlice.ts'
import cartReducer from 'slices/cartSlice.ts'

export const store = configureStore({
	reducer: {
		catalog: catalogReducer,
		cart: cartReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
