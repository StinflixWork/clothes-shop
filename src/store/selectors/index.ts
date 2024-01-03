import { RootState } from '../store.ts'
import { createSelector } from '@reduxjs/toolkit'

const selectAllProducts = ({ catalog }: RootState) => catalog.products
const selectFilters = ({ catalog }: RootState) => catalog.filters

export const selectFilteredProducts = createSelector(
	[selectAllProducts, selectFilters],
	(products, filters) => {
		const { search, category, rangePrice, sort } = filters

		const filteredProducts = products
			.filter(product => {
				const isTitleMatch = product.title
					.toLowerCase()
					.includes(search.toLowerCase())
				const isCategoryMatch =
					category.length === 0 || category.includes(product.category)
				return isTitleMatch && isCategoryMatch
			})
			.filter(
				product =>
					product.price > rangePrice[0] && product.price < rangePrice[1]
			)

		const sortedProducts = filteredProducts.sort((a, b) => {
			switch (sort) {
				case 'expensive':
					return a.price - b.price
				case 'cheaper':
					return b.price - a.price
				case 'new':
					return b.id - a.id
				default:
					return a.id - b.id
			}
		})

		return sortedProducts
	}
)
