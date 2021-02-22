const regE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const inValidEmail = (email) => {
  let emailsList = email.split(",")
       .map(email => email.trim())
       .filter(email => regE.test(email) === false);

      if(emailsList.length){
        return `These are the invalid emails ${emailsList}`
      }

      return;
}


const validate = values => {
    const errors = {}
    if (!values.name) {
      errors.name = 'Please enter your name'
    }
    if (!values.username) {
      errors.username = 'Please enter username'
    }

    if (!values.password) {
      errors.password = 'Please enter password'
    }
    if (!values.passwordConfirm) {
      errors.passwordConfirm = 'Enter password is not same'
    }

    if (!values.email) {
      errors.email = 'Email is mandatory !!'
    }else if(inValidEmail(values.email)){
      errors.email  = inValidEmail(values.email);
    }

  
    return errors
  }
  
  export default validate;