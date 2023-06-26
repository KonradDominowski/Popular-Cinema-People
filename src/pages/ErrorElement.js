import { useRouteError } from "react-router-dom";

export default function ErrorElement(params) {
	const error = useRouteError()
	console.log(error.data)
	return <h1>{ error.data.message }</h1>
}
