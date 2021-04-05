export default function validate(values) {
  let errors = {};
  if (!values.name) {
    errors.name = 'Please enter your name';
  } //optional settings
  else if (values.name.length < 2) {
    errors.name = 'Please enter a valid name';
  }
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@link.cuhk.edu.hk/.test(values.email)) {
    errors.email = 'Please input your CUHK email';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } //optional settings 
  else if (values.password.length < 6) {
    errors.password = 'Password must be 6 characters or more';
  }
  if (values.password.length >= 6 && values.password2.length ==0) {
    errors.password2 = 'Please re-enter your password';
  } //optional settings 
  else if (values.password.length >= 6 && values.password !== values.password2) {
    errors.password2 = 'Password does not match';
  }
  
  return errors;
}
