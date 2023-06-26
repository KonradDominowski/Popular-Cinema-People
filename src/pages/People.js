import { Suspense } from 'react';
import { Await, defer, json, useLoaderData, useParams } from 'react-router-dom';

import PeopleList from '../components/PeopleTable/PeopleList';
import Spinner from './../components/UI/Spinner'
import { Link } from 'react-router-dom';
import ErrorElement from './ErrorElement';

async function loadPeople(pageNumber) {
	if (pageNumber < 1 || pageNumber > 500) {
		return json({
			message: 'Page number has to be between 1 and 500'
		}, { status: 422 })
	}

	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTJiZTVjOTFmOWMyMzk1MGM4MDllNGQ2ZjkwNmMzMSIsInN1YiI6IjY0OTMxMDk2YzI4MjNhMDBmZmEwYTc1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pUtCRTmbnYF_w4f0rkObhKqh2tdKo6WyeLgYRogb9M4'
		}
	};

	const res = await fetch(`https://api.themoviedb.org/3/person/popular?language=en-US&page=${pageNumber}`, options)

	if (!res.ok) {
		console.log('json is returned')
		return json({ message: 'Could not fetch data' }, { status: 422 })
	}

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
				{
					currentPage > 1 && <Link to={ previousPage } >Previous</Link>
				}
				<span> Page { currentPage }</span>
				<Link to={ nextPage }>Next</Link>
			</div>
			<Suspense fallback={ <Spinner /> }>
				<Await
					resolve={ people }
					errorElement={ <div>Could not load people.</div> }
					children={ fetchedPeople =>
						<PeopleList people={ fetchedPeople } />
					}
				/>
			</Suspense>
		</>
	)
}