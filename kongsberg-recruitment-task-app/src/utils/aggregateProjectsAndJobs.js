export default function aggregateProjectsAndJobs(projects) {
	const isAggregated = (project) => {
		return aggregatedProjects.filter(el => (el.title || el.name) === (project.title || project.name)).length > 0
	}

	let jobs = {}
	let aggregatedProjects = []

	projects.forEach(project => {
		if (isAggregated(project)) {
			jobs[project.title || project.name]?.push(project.job || project.character)
		} else {
			jobs[project.title] = [project.job || project.character]
			aggregatedProjects.push(project)
		}
	})

	return [aggregatedProjects, jobs]
}