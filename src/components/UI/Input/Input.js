import React from 'react'
import './Input.scss'

const Input = props => {
  
  const isInvalid = ({valid, touched, shouldValidate}) => {
    return !valid && touched && shouldValidate
  }
  
  const cls = ['Input']
  const htmlFor = Math.random()
  
  if (isInvalid(props)) {
    cls.push('invalid')
  }
  
  return (
    <div className={cls.join(' ')}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input id={htmlFor} onChange={props.onChange} value={props.value}/>
      
      {
        isInvalid(props)
          ? <small>{props.errorMessage}</small>
          : null
      }
      
    </div>
    )
}

export default Input