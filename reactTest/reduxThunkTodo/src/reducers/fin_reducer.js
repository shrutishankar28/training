import {
	combineReducers
} from 'redux'
import todoreducer from './todoreducer'
import loading from './loading'
import removing from './removing'
import checking from './checking'


const todoRed = combineReducers({
	loading,
	checking,
	removing,
	todoreducer
})

export default todoRed
