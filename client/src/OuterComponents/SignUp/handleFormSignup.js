import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../../actions/auth';
import { useHistory } from 'react-router-dom';

//use form is a react custom hook
const useForm = (success, validate) => {
  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);

  //local variable to this function
  const [variables, updateValues] = useState({
    name:'',
    username: '',
    email: '',
    major:'',
    mentor_mentee: '',
    password: '',
    password2: '',d2: '',
  });

  const dispatch = useDispatch();
  const history = useHistory();

    //for handling changes in input field
  const handleChange = e => {
    const { name, value } = e.target;
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
        dispatch(signUp(variables, history));
        //to extract the input data
        console.log('component signup state is: ', JSON.stringify(variables) )
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [errors]
  );

  return { variables, errors, handleChange, handleSubmit };
};

export default useForm;