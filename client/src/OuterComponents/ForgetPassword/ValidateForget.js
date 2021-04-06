export default function validate(variables) {
  let errors = {};
  if (!variables.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@link.cuhk.edu.hk/.test(variables.email)) {
    errors.email = 'Please input your CUHK email address';
  }

  return errors;
}
