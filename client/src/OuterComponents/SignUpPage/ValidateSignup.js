export default function validate(values) {
  let errors = {};
  if (!values.major) {
    errors.major = 'Please enter your major';
  } //optional settings
  else if (values.major.length < 2) {
    errors.major = 'Please enter a valid major';
  }
  if (!(values.start_year && values.end_year)) {
    errors.year = 'Please enter your study period';
  } else if (values.end_year <  values.start_year) {
    errors.year = 'Please enter a valid study period';
  }
  if (!values.mentor_mentee) {
    errors.mentor_mentee = 'Please enter your choice';
  } 
  return errors;
}
