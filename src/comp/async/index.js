import React, { Component } from 'react'
import { Button, Icon, Spin } from 'antd' 
import { connect } from 'react-redux'
import { async_add, async_subtract } from '../../action/async.action'
import { PENDING } from '../../constants/async_status'

import './style.styl'

@connect(
  state => state,
  {async_add, async_subtract}
)
class Async extends Component {

  constructor(props) {
    super(props)
    this.handleAsyncAdd = this.handleAsyncAdd.bind(this)
    this.handleAsyncMinus = this.handleAsyncMinus.bind(this)
  }

  render () {
    const { status } = this.props

    if (status === PENDING) {
      return (
        <div style={{textAlign: 'center'}}>
          <Spin />
        </div>
      )
    }

    return (
      <div className={'btn-wrapper'}>
        <Button className={'ez-btn'} onClick={this.handleAsyncAdd} ><Icon type="plus" />Add~</Button>
        <Button className={'ez-btn'} onClick={this.handleAsyncMinus}  ><Icon type="minus" />Minus~</Button>
      </div>
    )
  }

  handleAsyncAdd () {
    this.props.async_add()
  }

  handleAsyncMinus () {
    this.props.async_subtract()
  }

}

export default Async