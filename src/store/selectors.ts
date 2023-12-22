import { createSelector } from '@reduxjs/toolkit'
import { RootState } from './store.ts'

export const selectAllProducts = ({ catalog }: RootState) => catalog.products
export const selectIdFilterProduct = ({ catalog }: RootState) =>
	catalog.idFilterProduct

export const selectByIdProduct = createSelector(
	[selectAllProducts, selectIdFilterProduct],
	(catalog, idProduct) => {
		return catalog.filter((product: { id: number }) => product.id === idProduct)
	}
)
