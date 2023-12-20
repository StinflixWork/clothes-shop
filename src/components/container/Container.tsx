import { ReactNode } from 'react'

interface IContainer {
	children: ReactNode
}
const Container = ({ children }: IContainer) => {
	return <div className='max-w-[1232px] px-4 h-full mx-auto'>{children}</div>
}

export default Container
