export default function validate(variables) {
  let errors = {};
  if (!variables.jobName) {
    errors.jobName = 'Job name is required';
  } //optional settings 
  else if (variables.jobName.length < 2) {
    errors.jobName = 'Please enter a valid job name';
  }  if (!variables.companyName) {
    errors.companyName = 'Company name is required';
  } //optional settings 
  else if (variables.companyName.length < 3) {
    errors.companyName = 'Please enter a valid company name';
  }if (!variables.description) {
    errors.description = 'Job description is required';
  } //optional settings 
  if (!variables.location) {
    errors.location = 'Location is required';
  } 



  return errors;
}
