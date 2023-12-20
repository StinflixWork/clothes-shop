import HomePage from 'pages/home-page/HomePage.tsx'
import CatalogPage from 'pages/catalog-page/CatalogPage.tsx'
import CartPage from 'pages/cart-page/CartPage.tsx'
import { ReactNode } from 'react'

type TypeRoutes = {
	path: string
	element: () => ReactNode
}

export const routesData: TypeRoutes[] = [
	{
		path: '/',
		element: HomePage
	},
	{
		path: '/catalog',
		element: CatalogPage
	},
	{
		path: '/cart',
		element: CartPage
	}
]