import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import {BrowserRouter} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

import sagaRoot from './saga/saga'
import reducer from './reducers/simple.reducer'
import App from './App'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, compose(applyMiddleware(sagaMiddleware), applyMiddleware(logger)))
sagaMiddleware.run(sagaRoot)

ReactDOM.render(
  (
    <Provider store={store} >
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
  ),
document.getElementById('root'))
registerServiceWorker()
