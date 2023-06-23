import { Link, useLocation, useRouteLoaderData } from 'react-router-dom'

import classes from './Breadcrumbs.module.css'

export default function Breadcrumbs() {
	const location = useLocation()
	const crumbs = location.pathname.split('/').filter(path => path !== '')

	const breadcrumbs = crumbs.map((crumb, i, arr) => <Link to={ arr.slice(0, i + 1).join('/') } key={ crumb } className={ classes.crumb }>
		{ `${crumb[0].toUpperCase()}${crumb.slice(1)}` }
	</Link>)

	return <div className={ classes.crumbs }>
		<Link to={ '/' } key='home' className={ classes.crumb }>Home</Link>
		{ breadcrumbs }
	</div>
}
