import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './QuizList.scss'

export default class QuizList extends Component {
  
  renderQuizes() {
    return [1, 2, 3].map((quiz, index) => {
      return (
        <li key={index}>
          <Link
            to={'/quiz/' + quiz}
          >
            Тест {quiz}
          </Link>
        </li>
      )
    })
  }
  
  render() {
    return (
      <div className={'QuizList'}>
        <div>
          <h1>Выберите тест</h1>
          <ul>
            {this.renderQuizes()}
          </ul>
        </div>
      </div>
    )
  }
}