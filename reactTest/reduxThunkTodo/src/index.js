import React from 'react'
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import todored from './reducers/fin_reducer'
import AppTodo from './components/AppTodo'
//import '../public/index.html'


const store = createStore(todored, applyMiddleware(thunk));

ReactDOM.render(

  <Provider store={store}>
    <AppTodo />
  </Provider>,
  document.getElementById('root')

)
