import movie from './../movie.json'

import classes from './MovieDetails.module.css'

export default function MovieDetails() {
	const genres = movie.genres.map(genre => genre.name).join(', ')
	const releaseDate = new Date(movie.release_date)
	console.log(releaseDate)
	return <div className={ classes.movieDetails }>
		<div className={ classes.header }>
			<div>
				<h2>{ movie.title } </h2>
				<p>Genres: { genres }</p>
				<p>Year: { releaseDate.getFullYear() } </p>
				<p>Runtime: { movie.runtime } </p>
			</div>
			<img src={ `https://image.tmdb.org/t/p/w500/${movie.poster_path}` } />
		</div>
		<p>{ movie.overview }</p>
	</div>
}
