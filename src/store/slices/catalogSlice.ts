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
		setFilters: (state, { payload }) => {
			state.filters = payload
		},
		toggleIsFavorite: (state, { payload }) => {
			const updatedProducts = state.products.map(product =>
				product.id === payload
					? { ...product, isFavorite: !product.isFavorite }
					: product
			)

			state.products = updatedProducts

			const isProductInFavorites = state.favorites.some(
				product => product.id === payload
			)

			state.favorites = isProductInFavorites
				? state.favorites.filter(product => product.id !== payload)
				: [
						...state.favorites,
						...updatedProducts.filter(product => product.id === payload)
					]
		}
	}
})

export const { setFilters, toggleIsFavorite } = catalogSlice.actions
export default catalogSlice.reducer
