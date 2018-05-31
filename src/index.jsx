import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './containers/App'
// import userForm from './reducers'
// const store = createStore({userForm})
render(
  <Provider store={}>
    <App />
  </Provider>,
  document.getElementById('root')
)
