import { Suspense } from 'react';
import { Await, defer, json, useLoaderData, useParams, Link } from 'react-router-dom';

import PeopleList from '../components/PeopleTable/PeopleList';
import Spinner from './../components/UI/Spinner'

import classes from './People.module.css'

async function loadPeople(pageNumber) {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTJiZTVjOTFmOWMyMzk1MGM4MDllNGQ2ZjkwNmMzMSIsInN1YiI6IjY0OTMxMDk2YzI4MjNhMDBmZmEwYTc1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pUtCRTmbnYF_w4f0rkObhKqh2tdKo6WyeLgYRogb9M4'
		}
	};

	const res = await fetch(`https://api.themoviedb.org/3/person/popular?language=en-US&page=${pageNumber}`, options)

	if (!res.ok) {
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

	const previousPageLink = (currentPage <= 1) ?
		<div className={ `${classes.prev} ${classes.disabled}` }>Previous</div> :
		<Link to={ previousPage } className={ classes.prev }>Previous</Link>

	const nextPageLink = (currentPage >= 500) ?
		<div className={ `${classes.next} ${classes.disabled}` }>Next</div> :
		<Link to={ nextPage } className={ classes.next }>Next</Link>
	return (
		<>
			<div className={ classes.tableNav }>
				{ previousPageLink }
				<div className={ classes.pageNumber }> Page { currentPage } of 500</div>
				{ nextPageLink }
			</div>
			<div className={ classes.table }>
				<div className={ classes.tableHeader }>
					<span>Name</span>
					<span>Known For</span>
					<span>Occupation</span>
				</div>
				<Suspense fallback={ <Spinner /> }>
					<Await
						resolve={ people }
						children={ fetchedPeople =>
							<PeopleList people={ fetchedPeople } />
						}
					/>
				</Suspense>
			</div>
		</>
	)
}