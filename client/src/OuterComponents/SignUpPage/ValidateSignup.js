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
  if (!(variables.start_year && variables.end_year)) {
    errors.year = 'Please enter your study period';
  } else if (variables.end_year <  variables.start_year) {
    errors.year = 'Please enter a valid study period';
  }
  if (!variables.mentor_mentee) {
    errors.mentor_mentee = 'Please enter your choice';
  } 
  return errors;
}