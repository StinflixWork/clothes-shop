import { NavLink } from 'react-router-dom'
import { TypeOrder } from 'types/index..ts'

interface IProductCart {
	purchase: TypeOrder
}
export const ProductCart = ({ purchase }: IProductCart) => {
	return (
		<div className='flex items-center'>
			<div className='flex items-center gap-x-4 pr-10 flex-auto'>
				<div className='w-20 h-20 rounded overflow-hidden'>
					<img
						className='object-cover w-full h-full'
						src={purchase.product.img.src}
						alt={purchase.product.img.alt}
					/>
				</div>
				<div>
					<div>
						<h2 className='text-xl'>
							<NavLink to={`/catalog/product/${purchase.product.id}`}>
								{purchase.product.title}
							</NavLink>
						</h2>
						<h4>
							Size: <span className='font-medium'>{purchase.selectSize}</span>
						</h4>
					</div>
				</div>
			</div>
			<div className='inline-flex items-center gap-x-3 text-sm'>
				<p>x1</p>
				<p className='font-medium text-lg'>{purchase.product.price} UAH</p>
			</div>
		</div>
	)
}
