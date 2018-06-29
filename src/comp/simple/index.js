import React, { Component } from 'react'
import { Button, Icon } from 'antd' 
import { connect } from 'react-redux'
import { add, subtract} from '../../action/simple.action'

import './style.styl'
@connect(
  state => state,
  {add, subtract}
)
class Simple extends Component {

  constructor(props) {
    super(props)
    this.handleAdd = this.handleAsyncAdd.bind(this)
    this.handleMinus = this.handleAsyncMinus.bind(this)
  }

  render () {
    return (
      <div className={'btn-wrapper'}>
        <Button className={'ez-btn'} onClick={this.handleAsyncAdd} ><Icon type="plus" />Add</Button>
        <Button className={'ez-btn'} onClick={this.handleAsyncMinus}  ><Icon type="minus" />Minus</Button>
      </div>
    )
  }

  handleAsyncAdd () {
    this.props.add()
  }

  handleAsyncMinus () {
    this.props.subtract()
  }

}

export default Simple