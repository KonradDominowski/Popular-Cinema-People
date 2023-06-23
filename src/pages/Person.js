import { Suspense } from "react";
import { json, defer, Await, useLoaderData } from "react-router-dom";
import PersonDetails from "../components/PersonDetails";
import Spinner from "../components/Spinner";

async function loadPerson(id) {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTJiZTVjOTFmOWMyMzk1MGM4MDllNGQ2ZjkwNmMzMSIsInN1YiI6IjY0OTMxMDk2YzI4MjNhMDBmZmEwYTc1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pUtCRTmbnYF_w4f0rkObhKqh2tdKo6WyeLgYRogb9M4'
		}
	};

	const res = await fetch(`https://api.themoviedb.org/3/person/${id}/combined_credits?language=en-US`, options)

	if (!res.ok) throw json({
		message: 'Could not fetch people data'
	})

	const data = await res.json()
	return data
}

export async function loader({ params }) {
	return defer({
		person: loadPerson(params.personID)
	})
}

export default function Person() {
	const { person } = useLoaderData()
	return <Suspense fallback={ <Spinner /> }>
		<Await resolve={ person }>
			{ fetchedPerson =>
				<PersonDetails person={ fetchedPerson } /> }
		</Await>
	</Suspense>
}
