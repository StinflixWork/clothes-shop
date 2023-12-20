import { Header } from 'views/header/Header.tsx'
import { Footer } from 'views/footer/Footer.tsx'
import { ReactNode } from 'react'

interface ILayout {
	children: ReactNode
}

const Layout = ({ children }: ILayout) => {
	return (
		<div className='min-h-full flex flex-col overflow-clip'>
			<Header />
			<main className='flex-auto'>{children}</main>
			<Footer />
		</div>
	)
}

export default Layout
