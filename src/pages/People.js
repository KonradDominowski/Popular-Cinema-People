import { Suspense } from 'react';
import { Await, defer, json, useLoaderData, useParams } from 'react-router-dom';

import PeopleList from '../components/PeopleTable/PeopleList';
import Spinner from './../components/UI/Spinner'
import { Link } from 'react-router-dom';

async function loadPeople(pageNumber) {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTJiZTVjOTFmOWMyMzk1MGM4MDllNGQ2ZjkwNmMzMSIsInN1YiI6IjY0OTMxMDk2YzI4MjNhMDBmZmEwYTc1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pUtCRTmbnYF_w4f0rkObhKqh2tdKo6WyeLgYRogb9M4'
		}
	};

	const res = await fetch(`https://api.themoviedb.org/3/person/popular?language=en-US&page=${pageNumber}`, options)

	if (!res.ok) throw json({
		message: 'Could not fetch people data'
	})

	const data = await res.json()
	return data.results
}

export function loader({ params }) {
	const pageNumber = params.pageNumber

	return defer({
		people: loadPeople(pageNumber)
	})
}


export default function People() {
	const { people } = useLoaderData()
	const params = useParams()

	const currentPage = Number(params.pageNumber)
	const previousPage = `/people/${currentPage - 1}`
	const nextPage = `/people/${currentPage + 1}`

	return (
		<>
			<div>
				<Link to={ previousPage }>Previous</Link>
				<span> Page { currentPage }</span>
				<Link to={ nextPage }>Next</Link>
			</div>
			<Suspense fallback={ <Spinner /> }>
				<Await resolve={ people }>
					{ fetchedPeople => <PeopleList people={ fetchedPeople } /> }
				</Await>
			</Suspense>
		</>
	)
}