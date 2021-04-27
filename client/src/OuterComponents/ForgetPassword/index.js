
import React from 'react'
import { BtnWrapper, Content, Form, Heading, NextBtn, Warning, SubmitBtn } from './ForgetPasswordElement';
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
const ForgetPasswordForm = ({submitFormForget}) => {
    
    const classes = useStyles();
	
    const { variables, errors, handleChange, handleSubmit } = handleForm(
		submitFormForget,
		validate
	);
    
    return (
        //this is for the forget password form
        <Form>
            <form onSubmit={handleSubmit} noValidate>
                <Heading>Forgot Password</Heading>
                <Content>Enter your Email Address</Content>
                <Content>(xxxxxxxxxx@link.cuhk.edu.hk)</Content>
                <br></br>
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
               
                <BtnWrapper>
                    <NextBtn to='./auth' >Back</NextBtn>
                    <SubmitBtn type="submit" >
                    Next
                    </SubmitBtn>          
                </BtnWrapper> 
            </form>
        </Form>
    )
}

export default ForgetPasswordForm
