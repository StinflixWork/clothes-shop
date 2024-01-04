import { useParams } from 'react-router-dom'
import { useAppDispatch } from 'hooks/storeHooks.ts'
import { useSelector } from 'react-redux'
import { toggleIsFavorite } from 'slices/catalogSlice.ts'
import Container from 'components/container/Container.tsx'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { addToCart } from 'slices/cartSlice.ts'
import { RootState } from '../../store/store.ts'
import { useState } from 'react'

export const SingleProduct = () => {
	const params = useParams()
	const id = parseInt(params.idProduct as string)

	const dispatch = useAppDispatch()
	const products = useSelector(({ catalog }: RootState) => catalog.products)
	const [product] = products.filter((p: { id: number }) => p.id === id)

	const [isSelectSize, setIsSelectSize] = useState<boolean[]>(
		Array(product.size.length).fill(false)
	)

	function handleAddFavorite() {
		dispatch(toggleIsFavorite(product.id))
	}
	function handleAddToCart() {
		const selectedSize: string = product.size[isSelectSize.indexOf(true)] || ''
		const myPurchase = {
			product: { ...product },
			selectSize: selectedSize
		}

		dispatch(addToCart(myPurchase))
	}

	function handleClickSize(index: number) {
		setIsSelectSize(prevState => {
			if (prevState.some(s => s) && !prevState[index]) {
				return prevState
			}

			const updateSize = [...prevState]
			updateSize[index] = !updateSize[index]
			return updateSize
		})
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
							<div className='mb-5'>
								<h2 className='text-2xl font-semibold mb-3'>{product.title}</h2>
								<p className='text-xl mb-3'>{product.price} UAH</p>
								<div className='flex gap-x-5 items-center'>
									{product.size.map((s, index) => (
										<button
											key={index}
											className={`border border-solid border-gray-600 w-10 h-10 grid place-items-center hover:bg-gray-300 
											${isSelectSize[index] ? 'bg-gray-300' : ''}`}
											onClick={() => handleClickSize(index)}
										>
											{s}
										</button>
									))}
								</div>
							</div>
							<div className='flex items-center gap-x-4'>
								<button
									className='bg-amber-400 py-2 px-8 font-semibold hover:bg-red-500 hover:text-white'
									onClick={handleAddToCart}
								>
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
