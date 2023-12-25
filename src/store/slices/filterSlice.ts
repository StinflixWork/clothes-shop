import { createSlice } from '@reduxjs/toolkit'

const initialFilters: string[] = []

const filterSlice = createSlice({
	name: 'filters',
	initialState: initialFilters,
	reducers: {
		changeFilter: (_, action) => action.payload
	}
})

export const { changeFilter } = filterSlice.actions
export default filterSlice.reducer
