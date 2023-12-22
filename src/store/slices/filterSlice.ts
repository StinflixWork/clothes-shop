import { createSlice } from '@reduxjs/toolkit'

export enum FILTERS {
	ALL = 'all',
	NEW = 'new',
	JEANS = 'jeans',
	PANTS = 'pants'
}

const filterSlice = createSlice({
	name: 'filters',
	initialState: FILTERS.ALL,
	reducers: {
		changeFilter: (_, action) => action.payload
	}
})

export const { changeFilter } = filterSlice.actions
export default filterSlice.reducer
