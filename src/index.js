import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {BrowserRouter} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

import reducer from './reducers/simple.reducer'
import App from './App'

const store = createStore(reducer)

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
