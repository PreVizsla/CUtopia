export default function validate(values) {
  let errors = {};
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@link.cuhk.edu.hk/.test(values.email)) {
    errors.email = 'Please input your CUHK email address';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } //optional settings 
  else if (values.password.length < 6) {
    errors.password = 'Password must be 6 characters or more';
  }

  return errors;
}
