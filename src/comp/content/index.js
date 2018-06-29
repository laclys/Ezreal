import React, { Component } from 'react'
import { Layout } from 'antd'
import { connect } from 'react-redux'

import './style.styl'

const { Content } = Layout

@connect(
  state => state
)
class Con extends Component {
  render () {
    return (
      <Content className={'ez-content'}>
        <div className={'content-wrap'}>
          <p className={'ez-num'}>{this.props.num}</p>
        </div>
      </Content>
    )
  }
}

export default Con