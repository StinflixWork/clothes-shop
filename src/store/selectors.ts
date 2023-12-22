import { createSelector } from '@reduxjs/toolkit'
import { RootState } from './store.ts'
import { FILTERS } from 'slices/filterSlice.ts'

export const selectAllProducts = ({ catalog }: RootState) => catalog.products
export const selectIdFilterProduct = ({ catalog }: RootState) =>
	catalog.idFilterProduct

export const selectActiveFilter = ({ filters }: RootState) => filters

export const selectByIdProduct = createSelector(
	[selectAllProducts, selectIdFilterProduct],
	(catalog, idProduct) => {
		return catalog.filter((product: { id: number }) => product.id === idProduct)
	}
)

export const selectByFilterProduct = createSelector(
	[selectAllProducts, selectActiveFilter],
	(catalog, activeFilter) => {
		switch (activeFilter) {
			case FILTERS.ALL:
				return catalog
			case FILTERS.JEANS:
				return catalog.filter(product => product.category === FILTERS.JEANS)
			case FILTERS.PANTS:
				return catalog.filter(product => product.category === FILTERS.PANTS)
			case FILTERS.NEW:
				return catalog.slice().reverse()
			default:
				return catalog
		}
	}
)
