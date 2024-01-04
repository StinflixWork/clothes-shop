import { useSelector } from 'react-redux'
import { RootState } from '../../store/store.ts'
import Container from 'components/container/Container.tsx'
import { ProductCart } from 'views/cart/product-cart/ProductCart.tsx'

export const Cart = () => {
	const selectPurchases = useSelector(({ cart }: RootState) => cart.purchases)
	const purchases = selectPurchases.map(product => (
		<ProductCart key={product.product.id} purchase={product} />
	))

	return (
		<section className='py-10'>
			<Container>
				<h1 className='text-2xl font-semibold mb-4'>My purchases</h1>
				<div>{purchases}</div>
			</Container>
		</section>
	)
}
