export default function validate(variables) {
  let errors = {};
  if (!variables.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@link.cuhk.edu.hk/.test(variables.email)) {
    errors.email = 'Please input your CUHK email address';
  }
  if (!variables.password) {
    errors.password = 'Password is required';
  } //optional settings 
  else if (variables.password.length < 6) {
    errors.password = 'Password must be 6 characters or more';
  }

  return errors;
}