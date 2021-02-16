import React, {Component} from 'react'
import classes from './Quiz.module.scss'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

class Quiz extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      quizResults: {},
      isFinished: false,
      activeQuestion: 0,
      answerState: null,
      quiz: [
        {
          question: 'Сколько героев в доте?',
          rightAnswer: 3,
          id: 1,
          answers: [
            {
              text: '1',
              id: 1
            },
            {
              text: '2',
              id: 2
            },
            {
              text: 'Хуй знает, много',
              id: 3
            },
            {
              text: '4',
              id: 4
            }
          ]
        },
        {
          question: 'Вёрстка цэ заебись?',
          rightAnswer: 4,
          id: 2,
          answers: [
            {
              text: 'ЭТО АХУЕННО',
              id: 1
            },
            {
              text: 'НОРМ ТАК',
              id: 2
            },
            {
              text: 'Люблю верстать',
              id: 3
            },
            {
              text: 'Блять ненавижу верстку',
              id: 4
            }
          ]
        }
      ]
    }
  }
  
  answerSelectionHandler(answerId) {
    if(this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0]
      if(this.state.answerState[key] === 'success') {
        return
      }
    }
    
    const question = this.state.quiz[this.state.activeQuestion]
    const quizResults = this.state.quizResults
    
    if(answerId === question.rightAnswer) {
      
      this.setState({
        answerState: {[answerId]: 'success'}
      })
      
      if(!quizResults[question.id]) {
        quizResults[question.id] = 'success'
      }
      
      const timeout = window.setTimeout(() => {
  
        if(this.isFinished()) {
          this.setState({
            isFinished: true
          })
          return
        }
        
        this.setState(state => {
          return {
            activeQuestion: state.activeQuestion + 1,
            answerState: null,
            quizResults
          }
        })
        
        window.clearTimeout(timeout)
      }, 1000)
    } else {
      quizResults[question.id] = 'error'
      
      this.setState({
        answerState: {[answerId]: 'error'},
        quizResults
      })
    }
  }
  
  isFinished() {
    return this.state.quiz.length === this.state.activeQuestion + 1
  }
  
  onRetryHandler() {
    this.setState({
        quizResults: {},
        isFinished: false,
        activeQuestion: 0,
        answerState: null
    })
  }
  
  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.quizWrapper}>
          <h1>Ответьте на все вопросы</h1>
          {this.state.isFinished
            
            ? <FinishedQuiz
                questions={this.state.quiz}
                quizLength={this.state.quiz.length}
                results={this.state.quizResults}
                onClickRetry={this.onRetryHandler.bind(this)}
              />
            
            : <ActiveQuiz
              question={this.state.quiz[this.state.activeQuestion].question}
              answers={this.state.quiz[this.state.activeQuestion].answers}
              questionNumber={this.state.quiz[this.state.activeQuestion].id}
              quizLenght={this.state.quiz.length}
              onClickAnswer={this.answerSelectionHandler.bind(this)}
              state={this.state.answerState}
            />
          }
        </div>
      </div>
    )
  }
}

export default Quiz