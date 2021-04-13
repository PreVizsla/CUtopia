export default function validate(variables) {
  let errors = {};  
  if (!variables.name) {
    errors.name = 'Please enter your name';
  } //optional settings
  else if (variables.name.length < 2) {
    errors.name = 'Please enter a valid name';
  }
  if (!variables.major) {
    errors.major = 'Please enter your major';
  } //optional settings
  else if (variables.major.length < 2) {
    errors.major = 'Please enter a valid major';
  }
  if (!(variables.end_year)) {
    errors.year = 'Please enter your expected graduation year';
  } 
  if (variables.mentor_mentee.length < 1) {
    errors.mentor_mentee = 'Please enter your choice';
  } 
  return errors;
}