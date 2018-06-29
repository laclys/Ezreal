import React, { Component } from 'react'
import { Layout } from 'antd'
import cs from 'classnames'
import './style.styl'

const { Content } = Layout

class Con extends Component {
  render () {
    return (
      <Content className={'ez-content'}>
        <div className={'content-wrap'}>
          <p className={'ez-num'}>0</p>
        </div>
      </Content>
    )
  }
}

export default Con