import React, {Component} from 'react'
import './QuizCreator.scss'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import Select from '../../components/UI/Select/Select'
import {createFormControl} from '../../formFramework/formFramework'

function createAnswers(number) {
  return createFormControl({
    label: `Введите ${number} вариант ответа`,
    errorMessage: 'Вы ввели некорректную строку',
    id: number
  }, {required: true})
}

function createFormControls() {
  return {
    question: createFormControl({
      label: 'Введите название вопроса',
      errorMessage: 'Вы ввели некорректную строку'
    }, {required: true}),
    option1: createAnswers(1),
    option2: createAnswers(2),
    option3: createAnswers(3),
    option4: createAnswers(4),
  }
}

export default class QuizCreator extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      quiz: [],
      isFormValid: false,
      rightAnswer: 1,
      formControls: createFormControls()
    }
  }
  
  renderInputs() {
    return Object.keys(this.state.formControls).map((element, index) => {
      
      const control = this.state.formControls[element]
      
      return (
        <React.Fragment key={index}>
          <Input
            label={control.label}
            value={control.value}
            errorMessage={control.errorMessage}
            valid={control.valid}
            touched={control.touched}
            validation={control.validation}
            shouldValidate={control.shouldValidate}
            onChange={event => this.changeInputHandler(event, element)}
          />
        </React.Fragment>
      )
    })
  }
  
  changeInputHandler(event) {
    console.log(event.target.value)
  }
  
  changeSelectHandler(event) {
    this.setState({
      rightAnswer: +event.target.value
    })
    
    console.log(this.state.rightAnswer)
  }
  
  render() {
    const select = <Select
      value={this.state.rightAnswer}
      label={'Выберите правильный вариант ответа'}
      onChange={event => this.changeSelectHandler(event)}
      options={[
        {text: 1, id: 1},
        {text: 2, id: 2},
        {text: 3, id: 3},
        {text: 4, id: 4}
      ]}
    />
    
    return (
      <div className={'QuizCreator'}>
        <div>
          <h1>Создание теста</h1>
          <form onSubmit={event => event.preventDefault()}>
            {this.renderInputs()}
           
            {select}
            
            <Button type={'primary'}>Добавить вопрос</Button>
            <Button type={'success'}>Создать тест</Button>
          </form>
        </div>
      </div>
    )
  }
}