import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { signUpDetail } from '../../actions/auth';
import { useHistory } from 'react-router-dom';

//use form is a react custom hook
const useForm = (success, validate) => {
  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);

  //local variable to this function
  const [variables, updateValues] = useState({
    major: '',
    end_year: '',
    mentor_mentee: '',
    name:'',
  });

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

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(
    () => {
      //if there are no errors and use click submit button
      if (Object.keys(errors).length === 0 && submit) {
        success();
        //to extract the input data
        console.log('component signup state is: ', JSON.stringify(variables) )
        dispatch(signUpDetail(variables, history))
      }
    },
    [errors]
  );

  return { variables, errors, handleChange, handleSubmit  };
};

export default useForm;