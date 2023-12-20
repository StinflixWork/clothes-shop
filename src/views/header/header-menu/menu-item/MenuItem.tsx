import { NavLink } from 'react-router-dom'

type TypeMenu = {
	title: string
	path: string
}

export const MenuItem = ({ title, path }: TypeMenu) => {
	return (
		<div>
			<NavLink className='hover:underline underline-offset-4' to={path}>
				{title}
			</NavLink>
		</div>
	)
}
