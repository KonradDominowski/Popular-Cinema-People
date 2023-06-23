import { Suspense } from 'react';
import { Await, defer, json, useLoaderData } from 'react-router-dom';

import PeopleList from '../components/PeopleList';
import Spinner from './../components/Spinner'

async function loadPeople() {
	console.log('people fetched')
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTJiZTVjOTFmOWMyMzk1MGM4MDllNGQ2ZjkwNmMzMSIsInN1YiI6IjY0OTMxMDk2YzI4MjNhMDBmZmEwYTc1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pUtCRTmbnYF_w4f0rkObhKqh2tdKo6WyeLgYRogb9M4'
		}
	};

	const res = await fetch('https://api.themoviedb.org/3/trending/person/day?language=en-US', options)

	if (!res.ok) throw json({
		message: 'Could not fetch people data'
	})

	const data = await res.json()
	return data.results
}

export async function loader() {
	return defer({
		people: loadPeople()
	})
}


export default function People() {
	const { people } = useLoaderData()

	return <Suspense fallback={ <Spinner /> }>
		<Await resolve={ people }>
			{ fetchedPeople => <PeopleList people={ fetchedPeople } /> }
		</Await>
	</Suspense>
}
