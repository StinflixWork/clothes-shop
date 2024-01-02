import { MenuItem } from './menu-item/MenuItem.tsx'
import { FaHeart } from 'react-icons/fa'

export const Menu = () => {
	return (
		<nav className='flex items-center gap-5 text-amber-50 text-sm'>
			<MenuItem path='/' title='Home' />
			<MenuItem path='/catalog' title='Shop' />
			<MenuItem path='/cart' title='Cart' />
			<MenuItem path='/favorites' title={<FaHeart />} />
		</nav>
	)
}
