import Container from 'components/container/Container.tsx'
import { Menu } from './header-menu/Menu.tsx'
import Logo from 'components/logo/Logo.tsx'

export const Header = () => {
	return (
		<header className='h-20 bg-teal-950'>
			<Container>
				<div className='flex items-center h-full justify-between'>
					<Logo />
					<Menu />
				</div>
			</Container>
		</header>
	)
}
