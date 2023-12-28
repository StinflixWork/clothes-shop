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
	product: IProduct[]
}

const initialCatalog: TypeCatalog = {
	products: data,
	filters: {
		search: '',
		category: [],
		sort: 'default'
	},
	product: []
}

export const catalogSlice = createSlice({
	name: 'catalog',
	initialState: initialCatalog,
	reducers: {
		setFilters: (state, action) => {
			state.filters = action.payload
		},
		filterIdProduct: (state, action) => {
			const id = parseInt(action.payload)
			state.product = state.products.filter(product => product.id === id)
		}
	}
})

export const { setFilters, filterIdProduct } = catalogSlice.actions
export default catalogSlice.reducer
