import { Outlet, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useContext } from "react";
import TableCell from "./TableCell";

import classes from './TableRow.module.css'
import personDetailsContext from "../../context/personDetailsContext";

export default function TableRow({ item }) {
	const { setCurrentName } = useContext(personDetailsContext)
	const location = useLocation()
	const currentPersonID = location.pathname.split('/').at(-1)
	const detailedPerson = Number(currentPersonID) === item.id
	const classesCSS = `${classes.tableRow} ${detailedPerson && classes.active}`

	if (detailedPerson) {
		setCurrentName(item.name)
	}
	return (
		<>
			<HashLink smooth
				id={ item.id }
				to={ detailedPerson ? '.' : `${item.id}#${item.id}` }
				className={ classesCSS }
			>
				<TableCell className={ 'name' }>{ item.name }</TableCell>
				<TableCell>
					<ul>
						{ item.known_for.map(el => <li key={ el.id }>{ el.title }</li>) }
					</ul>
				</TableCell>
				<TableCell> { item.known_for_department } </TableCell>
			</HashLink >
			{ detailedPerson && <Outlet /> }
		</>
	)
}
