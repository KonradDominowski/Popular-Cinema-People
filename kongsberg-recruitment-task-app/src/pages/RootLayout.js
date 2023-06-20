import { Link, Outlet, useLocation } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'

export default function RootLayout(params) {
	const location = useLocation()
	const crumbs = location.pathname.split('/').filter(path => path !== '')

	const breadcrumbs = crumbs.map(crumb => <Link to={ crumb } key={ crumb }>{ ` > ${crumb}` }</Link>)
	return <>
		<h1>This is root layout</h1>
		<Link to={ '/' } key='home'>Home</Link>
		{ breadcrumbs }
		<Outlet />
	</>
}
