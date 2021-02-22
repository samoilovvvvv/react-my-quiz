import React from 'react'
import './Select.scss'

const Select = props => {
  const htmlFor = `select-${Math.random()}`
  
  return (
    <div className={'Select'}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <select
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
      >
        { props.options.map((option, index) => {
          return (
            <option
              key={index}
              value={option.id}
            >
              {option.text}
            </option>
            )
        })}
      </select>
    </div>
  )
}

export default Select