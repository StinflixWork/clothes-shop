import { useParams } from 'react-router-dom'
import Container from 'components/container/Container.tsx'
import { useFilterByIdProduct } from 'hooks/useFilterProductById.ts'

export const SingleProductPage = () => {
	const params = useParams()
	const [product] = useFilterByIdProduct(params.idProduct)

	return (
		<section className='py-10'>
			<Container>
				<div className='flex gap-x-10'>
					<div className='basis-[300px]'>
						<img src={product.img.src} alt={product.img.alt} />
					</div>
					<div className='flex-auto flex-col py-5'>
						<h2 className='text-2xl font-semibold mb-3'>{product.title}</h2>
						<p className='text-xl mb-5'>{product.price} UAH</p>
						<button className='bg-amber-400 py-2 px-8 font-semibold'>
							Buy
						</button>
					</div>
				</div>
			</Container>
		</section>
	)
}
