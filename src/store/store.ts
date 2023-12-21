import { configureStore } from '@reduxjs/toolkit'
import catalogReducer from 'slices/catalogSlice.ts'

export const store = configureStore({
	reducer: {
		catalog: catalogReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
