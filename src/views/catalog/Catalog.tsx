import { useSelector } from 'react-redux'
import Container from 'components/container/Container.tsx'
import { ProductItem } from 'views/catalog/product-item/ProductItem.tsx'
import { selectByCategoriesProduct } from '../../store/selectors.ts'
import { CatalogSidebar } from 'views/catalog/sidebar/CatalogSidebar.tsx'

export const Catalog = () => {
	const productsData = useSelector(selectByCategoriesProduct) // change on selectFilterCategories
	const products = productsData.map(product => (
		<ProductItem key={product.id} product={product} />
	))

	return (
		<section className='py-10'>
			<Container>
				<div className='flex'>
					<div className='flex-auto flex gap-x-10 flex-wrap'>{products}</div>
					<CatalogSidebar />
				</div>
			</Container>
		</section>
	)
}
