import { Outlet } from 'react-router-dom'
import Breadcrumbs from '../components/UI/Breadcrumbs'

import classes from './RootLayout.module.css'


export default function RootLayout() {
	return <>
		<div className={ classes.header }>
			<div className={ classes.crumbs }>
				<Breadcrumbs />
			</div>
		</div>
		<Outlet />
	</>
}
