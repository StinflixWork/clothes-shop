import Container from 'components/container/Container.tsx'
import { IProduct } from 'interfaces/index'
import { ProductItem } from 'views/catalog/product-item/ProductItem.tsx'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store.ts'

export const Favorites = () => {
	const favoritesData = useSelector(
		({ catalog }: RootState) => catalog.favorites
	)
	const favoritesProducts = favoritesData.map((product: IProduct) => (
		<ProductItem key={product.id} product={product} />
	))

	return (
		<section className='py-10'>
			<Container>
				<h1 className='text-2xl font-semibold mb-4'>My favorites</h1>
				<div className='flex gap-10 flex-wrap'>{favoritesProducts}</div>
			</Container>
		</section>
	)
}
