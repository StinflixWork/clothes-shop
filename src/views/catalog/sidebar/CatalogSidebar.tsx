import { SidebarCategories } from './sidebar-categories/SidebarCategories.tsx'
import { SidebarPrice } from 'views/catalog/sidebar/sidebar-price/SidebarPrice.tsx'

export const CatalogSidebar = () => {
	return (
		<aside className='border-l-2 border-solid border-gray-200 pl-5 flex flex-col gap-y-8'>
			<SidebarCategories />
			<SidebarPrice />
		</aside>
	)
}
