import { Await, defer, json, useLoaderData } from "react-router-dom";
import MovieDetails from "../components/MovieDetails"
import { Suspense } from "react";

async function loadDetails(id) {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTJiZTVjOTFmOWMyMzk1MGM4MDllNGQ2ZjkwNmMzMSIsInN1YiI6IjY0OTMxMDk2YzI4MjNhMDBmZmEwYTc1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pUtCRTmbnYF_w4f0rkObhKqh2tdKo6WyeLgYRogb9M4'
		}
	};

	const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)

	if (!res.ok) return json({ message: 'Couldn not fetch movie details' })
	const data = res.json()
	console.log(data)
	return data
}

export async function loader({ params }) {

	return defer({
		details: loadDetails(params.movieID)
	})
}

export default function Movie() {
	const { details } = useLoaderData()

	return (
		<Suspense fallback={ <h2>Loading movie details...</h2> }>
			<Await resolve={ details }>
				{
					fetchedDetails => <MovieDetails movie={ fetchedDetails } />
				}
			</Await>
		</Suspense>
	)
}
