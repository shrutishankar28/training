import React from 'react'
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import counter from './reducers'
import AppCounter from './AppCounter'

const store = createStore(counter,applyMiddleware(thunk));

ReactDOM.render(

  <Provider store={store}>
    <AppCounter />
  </Provider>,
  document.getElementById('root')

)
