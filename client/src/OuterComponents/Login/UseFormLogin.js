import { useState, useEffect } from 'react';


const useForm = (success, validate) => {
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [values, updateValues] = useState({
    email: '',
    password: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    // ... copy all value (spread operator)
    updateValues({...values, [name]: value});
  };

  const handleSubmit = e => {
    //preventing refreshing
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      //if there are no errors
      if (Object.keys(errors).length === 0 && isSubmitting) {
        success();
        //to extract the input data
        console.log('component state is: ', JSON.stringify(values) )
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
