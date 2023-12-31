import { Route, Routes } from 'react-router-dom'
import { routesData } from 'views/navigation/routes.data.ts'

export const Navigation = () => {
	const routes = routesData.map(route => (
		<Route key={route.path} path={route.path} element={<route.element />} />
	))

	return <Routes>{routes}</Routes>
}
