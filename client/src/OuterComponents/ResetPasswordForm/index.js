
import React from 'react'
import { BtnWrapper, Content, EmailField, Form, Heading, Warning, SubmitBtn } from './ForgetPasswordElement';
import validate from './ValidateForget';
import handleForm from './handleFormForget';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFilledInput-root": {
      background: "white",
    }
  }, TextField: {
  }
}));
const ResetPasswordForm = ({submitFormForget}) => {
    
    const classes = useStyles();
	
    const { variables, errors, handleChange, handleSubmit } = handleForm(
		submitFormForget,
		validate
	);
    
    return (
        <Form>
            <form onSubmit={handleSubmit} noValidate>
                <Heading>Reset Password</Heading>
                <Content>Please enter your new password</Content>
                <br></br>
                <div className='form-inputs' style={{marginBottom:15+"px"}}>
                    <TextField
                        id="filled-basic" label="password" variant="filled"
                        className={classes.root}
                        fullWidth={true}
                        type='password'
                        name='password'
                        placeholder='Enter your password'
                        value={variables.passwrod}
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
                <BtnWrapper>
                    <SubmitBtn type="submit" >
                    Submit
                    </SubmitBtn>          
                </BtnWrapper> 
            </form>
        </Form>
    )
}

export default ResetPasswordForm
