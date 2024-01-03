import { useParams } from 'react-router-dom'
import { useAppDispatch } from 'hooks/storeHooks.ts'
import { useSelector } from 'react-redux'
import { toggleIsFavorite } from 'slices/catalogSlice.ts'
import Container from 'components/container/Container.tsx'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

export const SingleProduct = () => {
	const params = useParams()
	const id = parseInt(params.idProduct as string)

	const dispatch = useAppDispatch()
	const products = useSelector(({ catalog }) => catalog.products)
	const [product] = products.filter((p: { id: number }) => p.id === id)

	function handleAddFavorite() {
		dispatch(toggleIsFavorite(product.id))
	}
	return (
		<section className='py-10'>
			<Container>
				{product && (
					<div className='flex gap-x-10'>
						<div className='basis-[300px]'>
							<img src={product.img.src} alt={product.img.alt} />
						</div>
						<div className='flex-auto flex-col py-5'>
							<h2 className='text-2xl font-semibold mb-3'>{product.title}</h2>
							<p className='text-xl mb-5'>{product.price} UAH</p>
							<div className='flex items-center gap-x-4'>
								<button className='bg-amber-400 py-2 px-8 font-semibold'>
									Buy
								</button>
								<button onClick={handleAddFavorite}>
									{product.isFavorite ? (
										<FaHeart size={28} />
									) : (
										<FaRegHeart size={28} />
									)}
								</button>
							</div>
						</div>
					</div>
				)}
			</Container>
		</section>
	)
}
