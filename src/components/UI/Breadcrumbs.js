import { Link, useLocation } from 'react-router-dom'
import { useContext } from 'react'

import classes from './Breadcrumbs.module.css'
import personDetailsContext from '../../context/personDetailsContext'

export default function Breadcrumbs() {
	const { currentName } = useContext(personDetailsContext)

	const location = useLocation()
	const crumbs = location.pathname.split('/').filter(path => path !== '')

	const breadcrumbs = crumbs.map((crumb, i, arr) => <Link to={ arr.slice(0, i + 1).join('/') } key={ crumb } className={ classes.crumb }>
		{
			i === 1 ?
				`Page ${crumb}` :
				i === 2
					? currentName
					: `${crumb[0].toUpperCase()}${crumb.slice(1)}`
		}
	</Link>)

	return <div className={ classes.crumbs }>
		<Link to={ '/' } key='home' className={ classes.crumb }>Home</Link>
		{ breadcrumbs }
	</div>
}
