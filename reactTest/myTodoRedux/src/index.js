import React from 'react'
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoreducer from './reducers/todoreducer'
import AppTodo from './components/AppTodo'
//import '../public/index.html'


const store = createStore(todoreducer);

ReactDOM.render(

  <Provider store={store}>
    <AppTodo />
  </Provider>,
  document.getElementById('root')

)
