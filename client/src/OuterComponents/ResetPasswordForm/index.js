
import React from 'react'
import { BtnWrapper, Content, Form, Heading, NextBtn, Warning, SubmitBtn } from '../ForgetPassword/ForgetPasswordElement';
import validate from './ValidateReset';
import handleForm from './handleFormReset';
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
                <Heading>Forget Password</Heading>
                <Content>Enter your New Password</Content>
                <Content>Password needs to be 6 or more letters</Content>
                <br></br>
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
               
                <BtnWrapper>
                    <NextBtn to='./auth' >back</NextBtn>
                    {/* <Submit_btn type="submit" >
                        <Link_text to='./next' >
                            next
                        </Link_text>
                    </Submit_btn> */}
                    <SubmitBtn type="submit" >
                    Login
                    </SubmitBtn>          
                </BtnWrapper> 
            </form>
        </Form>
    )
}

export default ResetPasswordForm
