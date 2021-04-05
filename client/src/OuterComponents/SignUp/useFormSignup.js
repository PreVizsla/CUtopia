import { useState, useEffect } from 'react';
const useForm = (success, validate) => {
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  //local variable to this function
  const [values, updateValues] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
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
        console.log('component signup state is: ', JSON.stringify(values) )
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
