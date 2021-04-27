import { useState, useEffect } from 'react';
import {education_template} from "../index"
//use form is a react custom hook

const useForm = (success, validate) => {
  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);

  //local variable to this function
  //we are updating the value from the education_template local variable from the index
  const [variables, updateValues] = useState({
    school: education_template.school,
    degree: education_template.degree,
    start_year:education_template.start_year,
    end_year: education_template.end_year,
    description: education_template.description,
  });

  //for handling changes in input field 
  const handleChange = e => {
    const { name, value } = e.target;
    // ... copy all value (spread operator)
    updateValues({...variables, [name]: value});
  };
  
  //for handling events when submit button is pressed
  const handleSubmit = e => {
    //preventing refreshing
    e.preventDefault(); 

    setErrors(validate(variables));
    setSubmit(true);
  }; 

  useEffect(
    () => {
      //if there are no errors and use click submit button
      if (Object.keys(errors).length === 0 && submit) {
        education_template.school=variables.school;
        education_template.degree=variables.degree;
        education_template.description=variables.description;
        education_template.start_year=variables.start_year;
        education_template.end_year=variables.end_year;
        success();
        //to extract the input data
        console.log('component state is: ', JSON.stringify(variables) )
      }
    },
    [errors]
  );

  return { variables, errors, handleChange, handleSubmit };
};

export default useForm;
