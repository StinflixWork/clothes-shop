import { createSlice } from '@reduxjs/toolkit'
import CargoPants from 'images/catalog/pants/cargo_1.jpeg'

export type TypeCatalog = {
	id: number
	title: string
	price: number
	img: { alt: string; src: string }
	isFavorite: boolean
}

// temp fake data
const initialCatalog: TypeCatalog[] = [
	{
		id: 1,
		title: 'The jeans Cargo black slim',
		price: 1130,
		img: {
			alt: 'pants',
			src: CargoPants
		},
		isFavorite: false
	}
]

export const catalogSlice = createSlice({
	name: 'catalog',
	initialState: initialCatalog,
	reducers: {}
})

export default catalogSlice.reducer
