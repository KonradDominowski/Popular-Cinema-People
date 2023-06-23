import { Outlet, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import TableCell from "./TableCell";

import classes from './TableRow.module.css'

export default function TableRow({ item }) {
	const location = useLocation()
	const currentPerson = location.pathname.split('/').at(-1)
	const detailedPerson = Number(currentPerson) === item.id
	const classesCSS = `${classes.tableRow} ${detailedPerson && classes.active}`

	return (
		<>
			<HashLink smooth id={ item.id } to={ detailedPerson ? '.' : `${item.id}#${item.id}` } className={ classesCSS } >
				<TableCell className={ 'name' }>{ item.name }</TableCell>
				<TableCell>
					<ul>
						{ item.known_for.map(el => <li key={ el.id }>{ el.title }</li>) }
					</ul>
				</TableCell>
				<TableCell>
					{ item.known_for_department }
				</TableCell>
			</HashLink >
			{ detailedPerson && <Outlet /> }
		</>
	)
}
