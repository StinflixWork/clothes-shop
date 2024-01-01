import { RootState } from '../store.ts'
import { createSelector } from '@reduxjs/toolkit'
import { IProduct } from 'interfaces/index.ts'

const selectAllProducts = ({ catalog }: RootState) => catalog.products
const selectFilters = ({ catalog }: RootState) => catalog.filters

export const selectFilteredProducts = createSelector(
	[selectAllProducts, selectFilters],
	(products, filters) => {
		return products
			.filter((product: { category: string; title: string; price: number }) => {
				return (
					product.title.toLowerCase().indexOf(filters.search.toLowerCase()) >
						-1 &&
					(filters.category.length > 0
						? filters.category.includes(product.category)
						: true)
				)
			})
			.filter(
				product =>
					product.price > filters.rangePrice[0] &&
					product.price < filters.rangePrice[1]
			)
			.sort((a: IProduct, b: IProduct) => {
				if (filters.sort === 'expensive') {
					return a.price < b.price ? 1 : -1
				} else if (filters.sort === 'cheaper') {
					return a.price > b.price ? 1 : -1
				} else if (filters.sort === 'new') {
					return a.id < b.id ? 1 : -1
				} else {
					return a.id > b.id ? 1 : -1
				}
			})
	}
)
