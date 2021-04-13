import { useState, useEffect } from 'react';

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

  useEffect(
    () => {
      //if there are no errors and use click submit button
      if (Object.keys(errors).length === 0 && submit) {
        success();
        //to extract the input data
        console.log('component signup state is: ', JSON.stringify(variables) )
        // for mongodb trial
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

  return { variables, errors, handleChange, handleSubmit  };
};

export default useForm;