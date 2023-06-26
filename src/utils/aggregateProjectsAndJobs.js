export default function aggregateProjectsAndJobs(projects) {
	const isAggregated = (project) => {
		return aggregatedProjects.filter(el => (el.title || el.name) === (project.title || project.name)).length > 0
	}

	let jobs = {}
	let aggregatedProjects = []

	projects.forEach(project => {
		const projectTitle = project.title || project.name

		if (isAggregated(project)) {
			jobs[projectTitle].push(project.job || project.character)
		} else {
			jobs[projectTitle] = [project.job || project.character]
			aggregatedProjects.push(project)
		}
	})
	return [aggregatedProjects, jobs]
}