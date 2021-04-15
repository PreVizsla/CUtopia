export default function validate(variables) {
  let errors = {};
  if (!variables.title) {
    errors.name = 'Event name is required';
  } //optional settings 
  else if (variables.title.length < 2) {
    errors.name = 'Please enter a valid job name';
  }  if (!variables.eventDate) {
    errors.date = 'Event date is required';
  } //optional settings 
  if (!variables.description) {
    errors.description = 'Event description is required';
  } //optional settings 
  if (!variables.location) {
    errors.location = 'Location is required';
  } 



  return errors;
}
