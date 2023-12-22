import { createSlice } from '@reduxjs/toolkit'
import CargoJeans from 'images/catalog/pants/jeans_cargo_1.jpeg'
import CargoJPants from 'images/catalog/pants/pants_cargo_1.jpeg'
import { IProduct } from 'interfaces/index.ts'

type TypeCatalog = {
	products: IProduct[]
	idFilterProduct: number
}

// temp fake data
const initialCatalog: TypeCatalog = {
	products: [
		{
			id: 1,
			title: 'The jeans Cargo black slim',
			price: 1130,
			img: {
				alt: 'jeans',
				src: CargoJeans
			},
			isFavorite: false,
			category: 'jeans'
		},
		{
			id: 2,
			title: 'The pants Staff du cargo blue',
			price: 1230,
			img: {
				alt: 'pants',
				src: CargoJPants
			},
			isFavorite: false,
			category: 'pants'
		}
	],
	idFilterProduct: 1
}

export const catalogSlice = createSlice({
	name: 'catalog',
	initialState: initialCatalog,
	reducers: {
		setIdFilterProduct: (state, action: { payload: number }) => {
			state.idFilterProduct = action.payload
		}
	}
})

export const { setIdFilterProduct } = catalogSlice.actions
export default catalogSlice.reducer
