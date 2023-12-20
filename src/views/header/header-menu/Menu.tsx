import { MenuItem } from './menu-item/MenuItem.tsx'

export const Menu = () => {
	return (
		<nav className='flex gap-5 text-amber-50 text-sm'>
			<MenuItem path='/' title='Home' />
			<MenuItem path='/catalog' title='Shop' />
			<MenuItem path='/cart' title='Cart' />
		</nav>
	)
}
