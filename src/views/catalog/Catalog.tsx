import { useSelector } from 'react-redux'
import { IProduct } from 'interfaces/index.ts'
import { selectFilteredProducts } from '../../store/selectors'
import Container from 'components/container/Container.tsx'
import { CatalogSidebar } from 'views/catalog/sidebar/CatalogSidebar.tsx'
import { SortProducts } from 'views/catalog/sort-products/SortProducts.tsx'
import { ProductItem } from 'views/catalog/product-item/ProductItem.tsx'

export const Catalog = () => {
	const productsData = useSelector(selectFilteredProducts)
	const items = productsData.map((product: IProduct) => (
		<ProductItem key={product.id} product={product} />
	))

	return (
		<section className='py-10'>
			<Container>
				<div className='flex'>
					<div className='flex flex-auto flex-col gap-y-5'>
						<SortProducts />
						<div className='flex gap-10 flex-wrap'>{items}</div>
					</div>
					<CatalogSidebar />
				</div>
			</Container>
		</section>
	)
}
