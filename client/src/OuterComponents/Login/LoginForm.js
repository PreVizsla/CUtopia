import React from 'react'
import {  NextBtn, SubmitBtn, Warning} from './LoginElements';

import validate from './ValidateLogin';
import handleForm from './handleFormLogin';
import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";

//for the material ui styling
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFilledInput-root": {
      background: "white",
    }
  }, TextField: {
  }
}));

const LoginForm = ({ submitFormLogin }) => {
    const classes = useStyles();

    const { variables, errors, handleChange, handleSubmit } = handleForm(
        submitFormLogin,
        validate
    );

    return (
        <div id="login" className="user-input" >      
        
            <form onSubmit={handleSubmit} noValidate>
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
                        //placeholder='Enter your password'
                        value={variables.password}
                        onChange={handleChange}
                    />
                    {errors.password && <Warning>{errors.password}</Warning>}
                </div>
                {/* old method to directly route when button is pressed 
                <button className='form-input-btn' type='submit'>
                Sign up
                </button> */}
                {/* onClick={routeChange} */}
                <NextBtn to="Forget_Password" type="checkbox" >Forgot password</NextBtn>
                    
                <SubmitBtn type="submit" >
                    Login
                </SubmitBtn> 
            </form>
        </div>
    );
};

export default LoginForm;