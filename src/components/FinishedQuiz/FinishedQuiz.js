import React from 'react'
import classes from './FinishedQuiz.module.scss'
import Button from '../UI/Button/Button'
import {Link} from 'react-router-dom'

const FinishedQuiz = props => {
  
  const successCounter = Object.keys(props.results).reduce((total, key) => {
    if(props.results[key] === 'success') {
      total++
    }
    return total
  }, 0)
  
  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        {props.questions.map((question, index) => {
    
          const cls = ['fa',
            props.results[question.id] === 'success' ? 'fa-check' : 'fa-times',
            classes[props.results[question.id]]
          ]
    
          return (
            <li key={index}>
              <span>
                <strong>{question.id}.</strong>&nbsp;
                {question.question}
              </span>
              <i className={cls.join(' ')}/>
            </li>
          )
        })}
      </ul>
      <p>Правильно {successCounter} из {props.quizLength}</p>
      <Button onClickButton={props.onClickRetry} type={'retry'}>Повторить</Button>
      <Link to={'/'}>
        <Button type={'to-other-tests'}>Перейти к списку тестов</Button>
      </Link>
    </div>
  )
}

export default FinishedQuiz