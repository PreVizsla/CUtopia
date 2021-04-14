import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { createJob } from '../../actions/jobs';

//use form is a react custom hook
const useForm = (success, validate) => {
  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);

  //local variable to this function
  const [variables, updateValues] = useState({
    jobName:'',
    companyName:'',  
    location:'',
    description:'',
  });

  const dispatch = useDispatch();

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
        dispatch(createJob( variables ));
        console.log('component state is: ', JSON.stringify(variables) )
      }
    },
    [errors]
  );

  return { variables, errors, handleChange, handleSubmit };
};

export default useForm;
