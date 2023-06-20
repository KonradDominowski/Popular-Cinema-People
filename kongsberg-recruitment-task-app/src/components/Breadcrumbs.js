import { useMatches } from "react-router-dom";

export default function Breadcrumbs() {
	const matches = useMatches()
	const crumbs = matches
		.filter(match => Boolean(match.handle?.crumb))
		.map(match => match.handle.crumb(match.pathname))

	console.log(crumbs)
	return <span>bread</span>
}
