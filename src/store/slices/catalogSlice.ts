import { createSlice } from '@reduxjs/toolkit'
import { data } from '../../data/data.ts'
import { IProduct } from 'interfaces/index.ts'

type TypeFilters = {
	search: string
	category: string[]
	sort: 'expensive' | 'cheaper' | 'new' | 'default'
}

type TypeCatalog = {
	products: IProduct[]
	filters: TypeFilters
}

const initialCatalog: TypeCatalog = {
	products: data,
	filters: {
		search: '',
		category: [],
		sort: 'default'
	}
}

export const catalogSlice = createSlice({
	name: 'catalog',
	initialState: initialCatalog,
	reducers: {
		setFilters: (state, action) => {
			state.filters = action.payload
		}
	}
})

export const { setFilters } = catalogSlice.actions
export default catalogSlice.reducer
