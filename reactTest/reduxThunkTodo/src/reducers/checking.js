const checking = (state = false, action) => {
	switch (action.type) {

  case 'CHECK_PROGRESS':
  return {
    checking:true,
    cid: action.id
  }

  case 'CHECK_SUCCESS':
  return {
    checking:false,
    cid: action.id+100
  }

	default:
		return state
	}
}

export default checking
