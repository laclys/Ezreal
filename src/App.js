import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'

import Simple from './comp/simple/index'
import Async from './comp/async/index'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(err, info) {
    console.log(err, info)
    this.setState(() => ({
      hasError: true
    }))
  }

  render() {
    return !this.state.hasError ? (
      <div className="App">
        <Switch>
          <Route path='/simple' component={Simple} />
          <Route path='/async' component={Async} />
          <Route component={Simple} />
        </Switch>
      </div>
    ) : <div>error!</div>
  }
}

export default App
