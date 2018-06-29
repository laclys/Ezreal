import React, { Component } from 'react'
import { Button, Icon } from 'antd' 
import { connect } from 'react-redux'
import { add, subtract} from '../../action/simple.action'

import './style.styl'
@connect(
  state => state,
  { add, subtract }
)
class Simple extends Component {

  constructor(props) {
    super(props)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleMinus = this.handleMinus.bind(this)
  }

  render () {
    return (
      <div className={'btn-wrapper'}>
        <Button className={'ez-btn'} onClick={this.handleAdd} ><Icon type="plus" />Add</Button>
        <Button className={'ez-btn'} onClick={this.handleMinus}  ><Icon type="minus" />Minus</Button>
      </div>
    )
  }

  handleAdd () {
    this.props.add()
  }

  handleMinus () {
    this.props.subtract()
  }

}

export default Simple