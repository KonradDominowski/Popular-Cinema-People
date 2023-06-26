import TableRow from './TableRow'

export default function PeopleList({ people }) {
	return <>{
		people.map(item => <TableRow key={ item.id } item={ item } />)
	}</>
}
