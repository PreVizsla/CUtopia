import { useState, useEffect } from 'react';
const useForm = (success, validate) => {
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  //local variable to this function
  const [values, updateValues] = useState({
    major: '',
    start_year: '',
    end_year: '',
    mentor_mentee: '',
    age:'',
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
        // const postURL = "http://localhost:4000/api/staff/" //Our previously set up route in the backend
        // fetch(postURL, {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ // We should keep the fields consistent for managing this data later
        //         values,
        //         clockedIn:false,
        //         dates:[]
        //     })
        // })
        // .then(()=>{
        //     // Once posted, the user will be notified 
        //     alert('You have been added to the system!');
        // })
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
