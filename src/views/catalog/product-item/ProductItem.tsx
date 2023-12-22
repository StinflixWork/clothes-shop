import { NavLink } from 'react-router-dom'
import { IProduct } from 'interfaces/index.ts'

interface IProductItem {
	product: IProduct
}

export const ProductItem = ({ product }: IProductItem) => {
	return (
		<div className='w-[275px] max-h-[470px]'>
			<div className='w-full h-[400px]'>
				<img
					className='w-full h-full object-cover'
					src={product.img.src}
					alt={product.img.alt}
				/>
			</div>
			<div className='pt-4'>
				<NavLink to={`/catalog/product/${product.id}`}>
					<h4 className='font-semibold text-gray-900 text-sm mb-2'>
						{product.title}
					</h4>
				</NavLink>
				<p className='text-[18px]'>{product.price} UAH</p>
			</div>
		</div>
	)
}
