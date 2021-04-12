export default function validate(variables) {
  let errors = {};
  if (!variables.school) {
    errors.school = 'Institution is required';
  } //optional settings 
  else if (variables.school.length < 2) {
    errors.school = 'Please enter a valid Institution';
  }  if (!variables.degree) {
    errors.degree = 'degree is required';
  } //optional settings 
  else if (variables.degree.length < 3) {
    errors.degree = 'Please enter a valid degree';
  }if (!(variables.start_year && variables.end_year)) {
    errors.year = 'Please enter your study period';
  } else if (variables.end_year <  variables.start_year) {
    errors.year = 'Please enter a valid study period';
  }



  return errors;
}
