const loading = (state = false, action) => {
	switch (action.type) {
	case 'LOAD_PROGRESS':
		return true
	case 'LOAD_SUCCESS':
		return false
	default:
		return state
	}
}

export default loading
