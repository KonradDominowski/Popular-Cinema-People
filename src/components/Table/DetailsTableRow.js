import classes from './DetailsTableRow.module.css'

export default function DetailsTableRow({ role, jobs }) {
	const title = role.title || role.name
	const releaseDate = new Date(role.release_date || role.first_air_date)

	return <div className={ classes.row }>
		<div>
			<img className={ classes.poster } alt={ `${title} poster` } src={ `https://image.tmdb.org/t/p/w92/${role.poster_path}` } />
		</div>
		<div className={ classes.title }>
			<div>{ title }</div>
			<span>{ jobs.join(', ') }</span>
		</div>
		<div className={ classes.rating }>{ role.vote_average.toFixed(1) }</div>
		<div>{ releaseDate.getFullYear() }</div>
	</div>
}
