import { NavLink } from 'react-router-dom'
import { ReactNode } from 'react'

type TypeMenu = {
	title: string | ReactNode
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
