import React from 'react'

import { BtnWrapper, Content, EmailField, Form, Heading, NextBtn, Warning, SubmitBtn } from './ForgetPasswordElement';
import validate from './ValidateForget';
import useForm from './UseFormForget';
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
	
    const { handleChange, handleSubmit, values, errors } = useForm(
		submitFormForget,
		validate
	);
    
    return (
        <Form>
            <form onSubmit={handleSubmit} noValidate>
                <Heading>Forget Password</Heading>
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
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <Warning>{errors.email}</Warning>}
                </div>
               
                <BtnWrapper>
                    <NextBtn to='./signup_signin' >back</NextBtn>
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
        // <form>
        //     <Form>
        //     <Heading>Forget Password</Heading>
        //     <Content>Enter your Email Address</Content>
        //     <Content>(xxxxxxxxxx@link.cuhk.edu.hk)</Content>
            
		// 		<EmailField type="email"  placeholder="Email Id" pattern=".+@link.cuhk.edu.hk"  required />
        //     </Form>
        //     <BtnWrapper>
        //         <NextBtn to='./signup_signin' >back</NextBtn>
        //         {/* <Submit_btn type="submit" >
        //             <Link_text to='./next' >
        //                 next
        //             </Link_text>
        //         </Submit_btn> */}

        //         <NextBtn to='./next' >next</NextBtn>

            
        //     </BtnWrapper>
            
        // </form>
    )
}

export default ForgetPasswordForm
