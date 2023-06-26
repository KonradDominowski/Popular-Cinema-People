import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

export default function ErrorElement() {
	const error = useRouteError()
	console.log(error)
	let message = ''

	if (error?.status === 404) {
		message = 'Error 404, page not found.'
	} else {
		message = error.message
	}

	return <>
		<h1>Error</h1>
		<p>{ message }</p>

		<p>
			<Link to='/'>Go back</Link>
		</p>
	</>
}
