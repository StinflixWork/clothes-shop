import { createSlice } from '@reduxjs/toolkit'
import { data } from '../../data/data.ts'
import { IProduct } from 'interfaces/index.ts'

type TypeFilters = {
	search: string
	category: string[]
	sort: 'expensive' | 'cheaper' | 'new' | 'default'
	rangePrice: number[]
}

type TypeCatalog = {
	products: IProduct[]
	filters: TypeFilters
	favorites: IProduct[]
}

const initialCatalog: TypeCatalog = {
	products: data,
	filters: {
		search: '',
		category: [],
		sort: 'default',
		rangePrice: [0, 2000]
	},
	favorites: []
}

export const catalogSlice = createSlice({
	name: 'catalog',
	initialState: initialCatalog,
	reducers: {
		setFilters: (state, action) => {
			state.filters = action.payload
		},
		toggleIsFavorite: (state, { payload }) => {
			const products = state.products.slice()
			products.forEach(p => {
				if (p.id === payload) {
					p.isFavorite = !p.isFavorite
				}
			})

			state.products = products

			if (state.favorites.findIndex(p => p.id === payload) === -1) {
				const [foundProduct]: IProduct[] = state.products.filter(
					p => p.id === payload
				)
				state.favorites.push(foundProduct)
			} else {
				state.favorites = state.favorites.filter(p => p.id !== payload)
			}
		}
	}
})

export const { setFilters, toggleIsFavorite } = catalogSlice.actions
export default catalogSlice.reducer
