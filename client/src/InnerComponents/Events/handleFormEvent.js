import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { createEvent } from '../../actions/events';

//use form is a react custom hook
const useForm = (success, validate) => {
  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);

  //local variable to this function
  const [variables, updateValues] = useState({
    title:'',
    eventDate:'',  
    location:'',
    description:'',
  });

  const dispatch = useDispatch();
  const history = useHistory();

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
        dispatch(createEvent(variables, history))
        //to extract the input data
        console.log('component state is: ', JSON.stringify(variables) )
      }
    },
    [errors]
  );

  return { variables, errors, handleChange, handleSubmit };
};

export default useForm;
