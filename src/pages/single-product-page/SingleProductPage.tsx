import Container from 'components/container/Container.tsx'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store.ts'
import { useAppDispatch } from 'hooks/storeHooks.ts'
import { filterIdProduct } from 'slices/catalogSlice.ts'
import { useEffect } from 'react'

export const SingleProductPage = () => {
	const { idProduct } = useParams()
	const dispatch = useAppDispatch()
	const [product] = useSelector(({ catalog }: RootState) => catalog.product)

	useEffect(() => {
		dispatch(filterIdProduct(idProduct))
	}, [])

	return (
		<section className='py-10'>
			<Container>
				{product !== undefined && (
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
				)}
			</Container>
		</section>
	)
}
