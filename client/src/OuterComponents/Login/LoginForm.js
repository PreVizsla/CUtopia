import React from 'react'
import {  Form, NextBtn, InputField, LogInBtn, EmailField} from './LoginElements';

function LoginForm() {
    return (
        <div>   
            {/* to utilize the submit button functionality */}
             <form id="login" className="user-input"> 
                <Form >
                    <EmailField type="email"  placeholder="Email Id" pattern=".+@link.cuhk.edu.hk"  required />
                    <InputField type="text"  placeholder="Password" required />

                    <NextBtn to="Forget_Password" type="checkbox" >Forgot password</NextBtn>
                    
                    {/* <Submit_btn type="submit" >
                    <Link_text to='./next' >
                        next
                    </Link_text>
                    </Submit_btn> */}

                    <LogInBtn to='./FeedPage' >Login</LogInBtn>
                </Form>
            </form>
        </div>
    )
}

export default LoginForm
