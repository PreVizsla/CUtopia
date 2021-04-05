export default function validate(values) {
  let errors = {};
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@link.cuhk.edu.hk/.test(values.email)) {
    errors.email = 'Please input your CUHK email address';
  }

  return errors;
}
