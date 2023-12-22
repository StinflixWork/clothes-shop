import Container from 'components/container/Container.tsx'
import { useSelector } from 'react-redux'
import { ProductItem } from 'views/catalog/product-item/ProductItem.tsx'
import { selectByFilterProduct } from '../../store/selectors.ts'
import { useAppDispatch } from 'hooks/storeHooks.ts'
import { changeFilter, FILTERS } from 'slices/filterSlice.ts'

export const Catalog = () => {
	const productsData = useSelector(selectByFilterProduct)
	const products = productsData.map(product => (
		<ProductItem key={product.id} product={product} />
	))

	const dispatch = useAppDispatch()
	return (
		<section className='py-10'>
			<Container>
				<div className='flex flex-col gap-y-10'>
					<div className='flex gap-x-10'>
						<button
							className='py-2 px-8 bg-black text-amber-50'
							onClick={() => dispatch(changeFilter(FILTERS.ALL))}
						>
							All
						</button>
						<button
							className='py-2 px-8 bg-black text-amber-50'
							onClick={() => dispatch(changeFilter(FILTERS.NEW))}
						>
							New
						</button>
						<button
							className='py-2 px-8 bg-black text-amber-50'
							onClick={() => dispatch(changeFilter(FILTERS.JEANS))}
						>
							Jeans
						</button>
						<button
							className='py-2 px-8 bg-black text-amber-50'
							onClick={() => dispatch(changeFilter(FILTERS.PANTS))}
						>
							Pants
						</button>
					</div>
					<div className='flex gap-x-10 flex-wrap'>{products}</div>
				</div>
			</Container>
		</section>
	)
}
