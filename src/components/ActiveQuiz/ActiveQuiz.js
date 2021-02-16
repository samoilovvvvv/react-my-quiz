import React from 'react'
import classes from './ActiveQuiz.module.scss'
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => {
  return (
    <div className={classes.ActiveQuiz}>
      <p className={classes.question}>
        <span>
          <strong>{props.questionNumber}</strong>.&nbsp;
          <strong>{props.question}</strong>
        </span>
        <small>{props.questionNumber} из {props.quizLenght}</small>
      </p>
      <AnswersList
        answers={props.answers}
        onClickAnswer={props.onClickAnswer}
        state={props.state}
      />
    </div>
  )
}

export default ActiveQuiz