import React from 'react'
import classes from './MenuToggle.module.scss'

const MenuToggle = props => {
  const cls = [classes.MenuToggle, 'fas']
  
  if(!props.isOpen) {
    cls.push('fa-bars')
  } else {
    cls.push(classes.open, 'fa-times')
  }
  
  return (
    <i
      className={cls.join(' ')}
      onClick={props.onToggleMenu}
    />
  )
}

export default MenuToggle