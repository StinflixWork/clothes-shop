import Container from 'components/container/Container.tsx'
import { useSelector } from 'react-redux'
import { ProductItem } from 'views/catalog/product-item/ProductItem.tsx'
import { selectAllProducts } from '../../store/selectors.ts'

export const Catalog = () => {
	const productsData = useSelector(selectAllProducts)
	const products = productsData.map(product => (
		<ProductItem key={product.id} product={product} />
	))

	return (
		<section className='py-10'>
			<Container>{products}</Container>
		</section>
	)
}
