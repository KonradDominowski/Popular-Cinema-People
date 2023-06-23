import classes from './PeopleList.module.css'
import TableRow from './Table/TableRow'

export default function PeopleList({ people }) {
	return <div className={ classes.table }>
		<div className={ classes.tableHeader }>
			<span>Name</span>
			<span>Known For</span>
			<span>Occupation</span>
		</div>
		{
			people.map(item => <TableRow key={ item.id } item={ item } />)
		}
	</div>
}
