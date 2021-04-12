export default function validate(variables) {
  let errors = {};
  if (!variables.name) {
    errors.name = 'Job name is required';
  } //optional settings 
  else if (variables.name.length < 2) {
    errors.name = 'Please enter a valid job name';
  }  if (!variables.company) {
    errors.company = 'Company name is required';
  } //optional settings 
  else if (variables.company.length < 3) {
    errors.company = 'Please enter a valid company name';
  }if (!variables.description) {
    errors.description = 'Job description is required';
  } //optional settings 
  if (!variables.location) {
    errors.location = 'Location is required';
  } 



  return errors;
}
