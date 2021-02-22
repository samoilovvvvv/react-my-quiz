import React, {Component} from 'react'
import './Auth.scss'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import {createFormControl, validateControl, isFormValidateCheck} from '../../formFramework/formFramework'

export default class Auth extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      isFormValidate: false,
      formControls: {
        email: createFormControl({
          label: 'Email',
          errorMessage: 'Вы ввели некорректный email'
        }, {
          required: true,
          email: true
        }),
        password: createFormControl({
          label: 'Пароль',
          errorMessage: `Пароль должен состоять минимум из 6 символов`
        }, {
          required: true,
          minLength: 6
        })
      }
    }
  }
  
  changeInputHandler(event, controlName) {
    const formControls = {...this.state.formControls}
    const control = formControls[controlName]
    
    control.value = event.target.value
    control.touched = true
    control.valid = validateControl(control.value, control.validation)
    
    let isFormValidate = isFormValidateCheck(formControls);
    
    formControls[controlName] = control
    
    this.setState({
      formControls,
      isFormValidate
    })
  }
  
  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      
      const control = this.state.formControls[controlName]
      
      return (
        <Input
          key={index}
          label={control.label}
          errorMessage={control.errorMessage}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          validation={control.validation}
          shouldValidate={control.shouldValidate}
          onChange={event => this.changeInputHandler(event, controlName)}
        />
      )
    })
  }
  
  render() {
    return (
      <div className={'Auth'}>
        <div>
          <h1>Авторизация</h1>
          
          <form onSubmit={event => event.preventDefault()}>
            
            {this.renderInputs()}
            
            <Button type={'primary'} disabled={!this.state.isFormValidate}>Войти</Button>
            <Button type={'success'} disabled={!this.state.isFormValidate}>Зарегистрироваться</Button>
          </form>
        </div>
      </div>
    )
  }
}