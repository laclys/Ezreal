import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Layout } from 'antd'
import cs from 'classnames'

import './style.styl'

const { Header } = Layout

@withRouter
class Nav extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activeItem: '/simple'
    }
  }

  render () {
    const activePath = this.props.location.pathname
    return (
      <Layout>
        <Header className={'ez-header'}>
          <div>
            <span className={'ez-title'}>EZREAL</span>
            <Link to={'/simple'} className={cs('ez-link-item', {'ez-link-active': '/simple' === activePath})}>
              <span>Simple</span>
            </Link>
            <Link to={'/async'} className={cs('ez-link-item', {'ez-link-active': '/async' === activePath})}>
              <span>Async</span>
            </Link>
          </div>
        </Header>
      </Layout>
    )
  }
}

export default Nav