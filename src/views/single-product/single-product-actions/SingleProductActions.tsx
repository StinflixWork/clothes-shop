import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { FC } from 'react'

interface ISingleProductActions {
	handleAddToCart: () => void
	handleAddFavorite: () => void
	isFavorite: boolean
}
export const SingleProductActions: FC<ISingleProductActions> = ({
	handleAddToCart,
	handleAddFavorite,
	isFavorite
}) => {
	return (
		<div className='flex items-center gap-x-4'>
			<button
				className='bg-amber-400 py-2 px-8 font-semibold hover:bg-red-500 hover:text-white'
				onClick={handleAddToCart}
			>
				Buy
			</button>
			<button onClick={handleAddFavorite}>
				{isFavorite ? <FaHeart size={28} /> : <FaRegHeart size={28} />}
			</button>
		</div>
	)
}
