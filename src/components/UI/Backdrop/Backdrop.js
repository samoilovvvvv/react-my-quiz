import React from 'react'
import classes from './Backdrop.module.scss'

const Backdrop = props => {
  const cls = []
  
  if(props.isOpen) {
    cls.push(classes.Backdrop)
  }
  
  return (
    <div className={cls.join(' ')} onClick={props.onToggleMenu}></div>
  )
}

export default Backdrop