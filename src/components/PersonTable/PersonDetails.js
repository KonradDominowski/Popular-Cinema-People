import DetailsTableRow from "./DetailsTableRow"
import aggregateProjectsAndJobs from "../../utils/aggregateProjectsAndJobs"

import classes from './PersonDetails.module.css'

export default function PersonDetails({ person }) {
	const starredIn = person.cast
	const crewedIn = person.crew
	const projects = [...starredIn, ...crewedIn].sort((a, b) => b.vote_count - a.vote_count)

	const [aggregatedProjects, jobs] = aggregateProjectsAndJobs(projects)

	return <div className={ classes.details }>
		{ aggregatedProjects.map((role, i) => <DetailsTableRow key={ i } role={ role } jobs={ jobs[role.title || role.name] } />) }</div>
}
