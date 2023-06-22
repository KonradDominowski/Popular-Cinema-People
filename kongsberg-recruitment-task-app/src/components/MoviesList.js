import dummyData from './../dummyData.json'
import MovieItem from './MovieItem'

import classes from './MoviesList.module.css'


export default function MoviesList({ movies }) {
	return <ul className={ classes.movieList }>
		{ movies.map(movie => <MovieItem key={ movie.id } movie={ movie } />) }
	</ul>
}
