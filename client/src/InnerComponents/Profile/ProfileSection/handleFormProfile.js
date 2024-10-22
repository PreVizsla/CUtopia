import { useState, useEffect } from 'react';
import {Intro} from "./index"
//use form is a react custom hook
const useForm = (success, validate) => {
  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);

  //local variable to this function
  //the edit profile form is using the initial variable from the profile to get the data
  const [variables, updateValues] = useState({
    name: Intro.name,
    country:Intro.country,
    city:Intro.city,
    Heading: Intro.info,
    major: Intro.major,
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
