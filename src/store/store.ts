import { configureStore } from '@reduxjs/toolkit'
import catalogReducer from 'slices/catalogSlice.ts'
import filterReducer from 'slices/filterSlice.ts'

export const store = configureStore({
	reducer: {
		catalog: catalogReducer,
		filters: filterReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
