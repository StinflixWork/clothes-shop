import { IProduct } from 'interfaces/index.ts'
import { FC } from 'react'

interface ISingleProductBody {
	product: IProduct
	isSelectSize: boolean[]
	handleClickSize: (index: number) => void
}
export const SingleProductBody: FC<ISingleProductBody> = ({
	product,
	isSelectSize,
	handleClickSize
}) => {
	return (
		<div className='mb-5'>
			<h2 className='text-2xl font-semibold mb-3'>{product.title}</h2>
			<p className='text-xl mb-3'>{product.price} UAH</p>
			<div className='flex gap-x-5 items-center'>
				{product.size.map((s, index) => (
					<button
						key={index}
						onClick={() => handleClickSize(index)}
						className={`border border-solid border-gray-600 w-10 h-10 grid place-items-center
						 hover:bg-gray-300 ${isSelectSize[index] ? 'bg-gray-300' : ''}`}
					>
						{s}
					</button>
				))}
			</div>
		</div>
	)
}
