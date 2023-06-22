import { Await, defer, json, useLoaderData } from 'react-router-dom';

import MoviesList from "../components/MoviesList"
import { Suspense } from 'react';

// TODO
// Dodaj wyszukiwanie filmów, teraz łapie tylko harrego pottera

async function loadMovies() {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTJiZTVjOTFmOWMyMzk1MGM4MDllNGQ2ZjkwNmMzMSIsInN1YiI6IjY0OTMxMDk2YzI4MjNhMDBmZmEwYTc1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pUtCRTmbnYF_w4f0rkObhKqh2tdKo6WyeLgYRogb9M4'

		}
	};

	const res = await fetch(
		`https://api.themoviedb.org/3/search/movie?query=Harry%20Potter&include_adult=false&language=en-US&page=1`,
		options)

	if (!res.ok) return json({
		message: 'Could not fetch movies'
	})

	const data = await res.json()
	return data.results
}

export async function loader() {
	return defer({
		movies: loadMovies()
	})
}

export default function Movies() {
	const { movies } = useLoaderData()

	return <>
		<h2>This is movies layout</h2>
		<Suspense fallback={ <h2>Loading movies...</h2> }>
			<Await resolve={ movies }>
				{
					fetchedMovies => <MoviesList movies={ fetchedMovies } />
				}
			</Await>
		</Suspense>
	</>
}
