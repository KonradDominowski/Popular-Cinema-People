import { Link, Outlet } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'

import classes from './RootLayout.module.css'


export default function RootLayout() {

	return <>
		<div className={ classes.header }>
			<div className={ classes.crumbs }>
				<Breadcrumbs />
			</div>
			<Link to={ 'people' } className={ classes.link } >Show People</Link>
		</div>
		<Outlet />
	</>
}
