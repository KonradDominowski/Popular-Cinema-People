import genresList from './../genresList.json'

export default function MovieGenresList({ ids }) {
	const { genres } = genresList
	const genresNames = ids.map(genreID =>
		<span key={ Math.random() }>{ genres.find(genre => genre.id === genreID).name }</span>
	)
	return <>{ genresNames }</>
}
