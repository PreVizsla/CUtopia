import React from 'react'
import {  PasswordField, NameField, Warning, CheckBox,White, SubmitBtn, EmailField} from './SignupElements';

import validate from './ValidateSignup';
import handleForm from './handleFormSignup';
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
	
	const { variables, errors, handleChange, handleSubmit } = handleForm(
		submitFormSignup,
		validate
	);

    return (
        <div id="register" className="user-input">
		    <form onSubmit={handleSubmit} noValidate>
				<div className='form-inputs'  style={{marginBottom:15+"px"}}>
                    <TextField
						id="filled-basic" label="username" variant="filled"
                        className={classes.root}
                        fullWidth={true}
                        type='text'
                        name='username'
                        placeholder='Enter your name'
                        value={variables.username}
                        onChange={handleChange}
                    />
                    {errors.username && <Warning>{errors.username}</Warning>}
                </div>
				<div className='form-inputs' style={{marginBottom:15+"px"}}>
                    <TextField
						id="filled-basic" label="email" variant="filled"
                        className={classes.root}
                        fullWidth={true}
                        type='email'
                        name='email'
                        placeholder='Enter your email'
                        value={variables.email}
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
                        value={variables.password}
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
                        value={variables.password2}
                        onChange={handleChange}
                    />
                    {errors.password2 && <Warning>{errors.password2}</Warning>}
                </div>
                <SubmitBtn type="submit" >
                    Sign Up
                </SubmitBtn> 
            </form>
        </div>
    )
}

export default SignUpForm
