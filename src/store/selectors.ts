import { createSelector } from '@reduxjs/toolkit'
import { RootState } from './store.ts'

export const selectAllProducts = ({ catalog }: RootState) => catalog

export const selectByIdProduct = createSelector(
	[selectAllProducts],
	catalog => {
		return catalog.filter((product: { id: number }) => product.id === 1)
	}
)
