import { Link, Outlet, useLocation } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'


export default function RootLayout() {
	const location = useLocation()
	const crumbs = location.pathname.split('/').filter(path => path !== '')

	const breadcrumbs = crumbs.map((crumb, i, arr) => <Link to={ arr.slice(0, i + 1).join('/') } key={ crumb }>{ ` > ${crumb}` }</Link>)
	return <>
		<h1>This is root layout</h1>
		<Link to={ '/' } key='home'>Home</Link>
		{ breadcrumbs }
		<br></br>
		<Link to={ 'movies/' } >Show movies</Link>
		<Outlet />
	</>
}
