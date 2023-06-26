import React from "react"

const personDetailsContext = React.createContext({
	currentName: '',
	setCurrentName: () => { }
})

export default personDetailsContext