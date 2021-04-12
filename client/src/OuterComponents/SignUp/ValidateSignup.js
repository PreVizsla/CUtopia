export default function validate(variables) {
  let errors = {};
  if (!variables.username) {
    errors.username = 'Please enter your username';
  } //optional settings
  else if (variables.username.length < 2) {
    errors.username = 'Username must 1 character or more';
  }
  if (!variables.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@link.cuhk.edu.hk/.test(variables.email)) {
    errors.email = 'Please input your CUHK email';
  }
  if (!variables.password) {
    errors.password = 'Password is required';
  } //optional settings 
  else if (variables.password.length < 6) {
    errors.password = 'Password must be 6 characters or more';
  }
  if (variables.password.length >= 6 && variables.password2.length ==0) {
    errors.password2 = 'Please re-enter your password';
  } //optional settings 
  else if (variables.password.length >= 6 && variables.password !== variables.password2) {
    errors.password2 = 'Password does not match';
  }
  
  return errors;
}
