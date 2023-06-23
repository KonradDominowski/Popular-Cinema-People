import { Link, Outlet, useLocation } from "react-router-dom";

import classes from './TableRow.module.css'
import TableCell from "./TableCell";

export default function TableRow({ item }) {
	const location = useLocation()
	const currentPerson = location.pathname.split('/').at(-1)
	const detailedPerson = Number(currentPerson) === item.id
	const classesCSS = `${classes.tableRow} ${detailedPerson && classes.active}`

	return (
		<>
			<Link to={ `${item.id}` } className={ classesCSS } >
				<TableCell className={ 'name' }>{ item.name }</TableCell>
				<TableCell>
					<ul>
						{ item.known_for.map(el => <li key={ el.id }>{ el.title }</li>) }
					</ul>
				</TableCell>
				<TableCell>
					{ item.known_for_department }
				</TableCell>
			</Link >
			{ detailedPerson && <Outlet />
			}
		</>
	)
}
