import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useAppDispatch } from 'hooks/storeHooks.ts'
import { toggleIsFavorite } from 'slices/catalogSlice.ts'
import { addToCart } from 'slices/cartSlice.ts'
import { RootState } from '../../store/store.ts'
import Container from 'components/container/Container.tsx'
import { SingleProductBody } from 'views/single-product/single-product-body/SingleProductBody.tsx'
import { SingleProductActions } from 'views/single-product/single-product-actions/SingleProductActions.tsx'

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

	function handleAddToCart() {
		if (isSelectSize.indexOf(true)) {
			alert('Select the size')
			return
		}

		const selectedSize: string = product.size[isSelectSize.indexOf(true)] || ''
		const myPurchase = {
			product: { ...product },
			selectSize: selectedSize
		}

		dispatch(addToCart(myPurchase))
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
							<SingleProductBody
								product={product}
								isSelectSize={isSelectSize}
								handleClickSize={handleClickSize}
							/>
							<SingleProductActions
								isFavorite={product.isFavorite}
								handleAddToCart={handleAddToCart}
								handleAddFavorite={handleAddFavorite}
							/>
						</div>
					</div>
				)}
			</Container>
		</section>
	)
}
