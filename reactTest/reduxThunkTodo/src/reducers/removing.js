const removing = (state = false, action) => {
	switch (action.type) {
	case 'REMOVE_PROGRESS':
		return {
      removing:true,
      rid: action.id
    }
	case 'REMOVE_SUCCESS':
  return {
    removing:false,
    rid: action.id+100
  }

  
	default:
		return state
	}
}

export default removing
