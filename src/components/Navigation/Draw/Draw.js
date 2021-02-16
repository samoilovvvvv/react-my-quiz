import React, {Component} from 'react'
import classes from './Draw.module.scss'
import Backdrop from '../../UI/Backdrop/Backdrop'
import {NavLink} from 'react-router-dom'

const links = [
  {
    to: '/',
    label: 'Список тестов',
    exact: true
  },
  {
    to: '/auth',
    label: 'Аутентификация',
    exact: false
  },
  {
    to: '/quiz-creator',
    label: 'Создание теста',
    exact: false
  }
]

class Draw extends Component {
  
  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            activeClassName={classes.active}
            exact={link.exact}
            onClick={this.props.onToggleMenu}
          >
            {link.label}
          </NavLink>
        </li>
      )
    })
  }
  
  render() {
    const cls = [classes.Draw]
    
    if(!this.props.isOpen) {
      cls.push(classes.close)
    }
    
    return (
      <React.Fragment>
        <nav className={cls.join(' ')}>
          <ul>
            {this.renderLinks()}
          </ul>
        </nav>
        <Backdrop
          isOpen={this.props.isOpen}
          onToggleMenu={this.props.onToggleMenu}
        />
      </React.Fragment>
    )
  }
}

export default Draw