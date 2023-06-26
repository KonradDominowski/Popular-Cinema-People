import { Link, Outlet, useLocation } from 'react-router-dom'
import Breadcrumbs from '../components/UI/Breadcrumbs'

import classes from './RootLayout.module.css'


export default function RootLayout() {
	const { pathname } = useLocation()
	const isIndex = pathname === '/'

	return <>
		<div className={ classes.header }>
			<div className={ classes.crumbs }>
				<Breadcrumbs />
			</div>
			{ isIndex && <Link to={ 'people' } className={ classes.link } >Show People</Link> }
		</div>
		<Outlet />
	</>
}
