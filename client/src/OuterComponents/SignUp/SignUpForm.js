import React from 'react'
import {  PasswordField, NameField, Warning, CheckBox,White, SubmitBtn, EmailField} from './SignupElements';

import validate from './ValidateSignup';
import useForm from './useFormSignup';
import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFilledInput-root": {
      background: "white",
	  //height:"6ch"
    }
  }, TextField: {
  }
}));

const SignUpForm = ({submitFormSignup}) => {

	const classes = useStyles();
	
	const { handleChange, handleSubmit, values, errors } = useForm(
		submitFormSignup,
		validate
	);

    return (
        <div id="register" className="user-input">
		    <form onSubmit={handleSubmit} noValidate>
				<div className='form-inputs'  style={{marginBottom:15+"px"}}>
                    <TextField
						id="filled-basic" label="name" variant="filled"
                        className={classes.root}
                        fullWidth={true}
                        type='text'
                        name='name'
                        placeholder='Enter your name'
                        value={values.name}
                        onChange={handleChange}
                    />
                    {errors.name && <Warning>{errors.name}</Warning>}
                </div>
				<div className='form-inputs' style={{marginBottom:15+"px"}}>
                    <TextField
						id="filled-basic" label="email" variant="filled"
                        className={classes.root}
                        fullWidth={true}
                        type='email'
                        name='email'
                        placeholder='Enter your email'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <Warning>{errors.email}</Warning>}
                </div>
                <div className='form-inputs' style={{marginBottom:15+"px"}}>
                    <TextField
						id="filled-basic" label="password" variant="filled"
                        className={classes.root}
                        fullWidth={true}
                        type='password'
                        name='password'
                        placeholder='Enter your password'
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <Warning>{errors.password}</Warning>}
                </div>
				<div className='form-inputs' style={{marginBottom:15+"px"}}>
                    <TextField
						id="filled-basic" label="re-enter password" variant="filled"
                        className={classes.root}
                        fullWidth={true}
                        type='password'
                        name='password2'
                        placeholder='Re-enter your password'
                        value={values.password2}
                        onChange={handleChange}
                    />
                    {errors.password2 && <Warning>{errors.password2}</Warning>}
                </div>
                {/* <button className='form-input-btn' type='submit'>
                Sign up
                </button> */}
                {/* onClick={routeChange} */}
                {/* <NextBtn to="Forget_Password" type="checkbox" >Forgot password</NextBtn>
                     */}
                <SubmitBtn type="submit" >
                    Sign Up
                </SubmitBtn> 
            </form>
	
			{/* <form id="register" className="user-input">
				<InputField type="text" placeholder="Your Name" required/>
				<EmailField type="email" placeholder="Email Id" pattern=".+@link.cuhk.edu.hk" required/>
				<InputField type="text" placeholder="Password" required/>
				<InputField type="text" placeholder="Confirm Password" required/>
				<CheckBox type="checkbox" /><White>I agree to the terms & conditions</White>
				<SubmitBtn type="submit">Sign Up</SubmitBtn>
			</form> */}
        </div>
    )
}

export default SignUpForm
