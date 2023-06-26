import classes from './DetailsTableRow.module.css'
import Image from '../UI/Image'

export default function DetailsTableRow({ role, jobs }) {

	if (role.name === 'Wednesday') {
		console.log(role)
		console.log(jobs)
	}
	const title = role.title || role.name
	const releaseDate = new Date(role.release_date || role.first_air_date)
	const votes = `(${role.vote_count} ${role.vote_count === 1 ? 'vote' : 'votes'})`
	return <div className={ classes.row }>
		<div>
			<Image imgSrc={ `https://image.tmdb.org/t/p/w500/${role.poster_path}` } />
		</div>
		<div className={ classes.title }>
			<div>{ title }</div>
			<span>{ jobs?.join(', ') || '' }</span>
		</div>
		<div className={ classes.rating }>
			<div>{ role.vote_average.toFixed(1) }</div>
			<span>{ votes }</span>
		</div>
		<div>{ releaseDate.getFullYear() }</div>
	</div>
}
