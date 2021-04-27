export default function validate(variables) {
  let errors = {};
  if (!variables.name) {
    errors.name = 'Name is required';
  } //optional settings 
  else if (variables.name.length < 2) {
    errors.name = 'Please enter a valid name';
  }  if (!variables.major) {
    errors.major = 'Major is required';
  } //optional settings 
  else if (variables.major.length < 3) {
    errors.major = 'Please enter a valid major code/name';
  }

  return errors;
}
