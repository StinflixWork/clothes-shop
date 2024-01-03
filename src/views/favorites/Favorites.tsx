import Container from 'components/container/Container.tsx'
import { IProduct } from 'interfaces/index'
import { ProductItem } from 'views/catalog/product-item/ProductItem.tsx'
import { useSelector } from 'react-redux'

export const Favorites = () => {
	const favoritesData = useSelector(({ catalog }) => catalog.favorites)
	const favoritesProducts = favoritesData.map((product: IProduct) => (
		<ProductItem key={product.id} product={product} />
	))

	return (
		<section className='py-10'>
			<Container>
				<div className='flex gap-10 flex-wrap'>{favoritesProducts}</div>
			</Container>
		</section>
	)
}
