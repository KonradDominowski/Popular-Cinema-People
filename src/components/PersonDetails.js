import DetailsTableRow from "./Table/DetailsTableRow"
import aggregateProjectsAndJobs from "../utils/aggregateProjectsAndJobs"

import classes from './PersonDetails.module.css'


export default function PersonDetails({ person }) {
	const starredIn = person.cast.filter(el => el.vote_count >= 300)
	const crewedIn = person.crew.filter(el => el.vote_count >= 300)
	const projects = [...starredIn, ...crewedIn].sort((a, b) => b.vote_average - a.vote_average)

	const [aggregatedProjects, jobs] = aggregateProjectsAndJobs(projects)

	return <div className={ classes.details }>
		{ aggregatedProjects.map(role => <DetailsTableRow key={ Math.random() } role={ role } jobs={ jobs[role.title] } />) }</div>
}
