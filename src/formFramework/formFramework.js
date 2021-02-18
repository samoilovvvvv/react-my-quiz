import is from 'is_js'

export function createFormControl(config = {}, validation = null) {
  return {
    ...config,
    validation,
    value: '',
    valid: false,
    touched: false,
    shouldValidate: !!validation
  }
}

export function validateControl(value, validation = null) {
  if(!validation) {
    return true
  }
  
  let isValid = true
  
  if (validation.required) isValid = isValid && value.trim() !== ''
  
  if (validation.email) isValid = isValid && is.email(value)
  
  if (validation.minLength) isValid = isValid && value.trim().length >= validation.minLength
  
  return isValid
}

export function isFormValidateCheck(formControls = {}) {
  let isFormValidate = true
  
  Object.keys(formControls).map(control => {
   return isFormValidate = isFormValidate && formControls[control].valid
  })
  
  return isFormValidate
}