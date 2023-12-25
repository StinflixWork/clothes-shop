import { createSelector } from '@reduxjs/toolkit'
import { RootState } from './store.ts'

export const selectAllProducts = ({ catalog }: RootState) => catalog.products
export const selectIdFilterProduct = ({ catalog }: RootState) =>
	catalog.idFilterProduct

export const selectActiveFilter = ({ filters }: RootState) => filters

// вибірка по ID товару
export const selectByIdProduct = createSelector(
	[selectAllProducts, selectIdFilterProduct],
	(catalog, idProduct) => {
		return catalog.filter((product: { id: number }) => product.id === idProduct)
	}
)

// Вибірка по категоріям
export const selectByCategoriesProduct = createSelector(
	[selectAllProducts, selectActiveFilter],
	(products, categories) => {
		if (!categories.length) {
			return products
		} else {
			return products.filter(product => categories.includes(product.category))
		}
	}
)
