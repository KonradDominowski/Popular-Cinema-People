import { Link } from "react-router-dom"
import MovieGenres from "./MovieGenres"

import classes from './MovieItem.module.css'

export default function MovieItem({ movie }) {

	return <li className={ classes.movieItem }>
		<Link className={ classes.movieLink } to={ `${movie.id}` }>
			<div>
				{ movie.title }
			</div>
			<div>
				<MovieGenres ids={ movie.genre_ids } />
			</div>
			<div>
				{ movie.release_date }
			</div>
		</Link>
	</li>
}
