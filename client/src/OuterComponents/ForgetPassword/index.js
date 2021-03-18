import React from 'react'

import { BtnWrapper, Content, EmailField, Form, Heading, NextBtn } from './ForgetPasswordElement';

function ForgetPasswordForm() {
    return (
        <form>
            <Form>
            <Heading>Forget Password</Heading>
            <Content>Enter your Email Address</Content>
            <Content>(xxxxxxxxxx@link.cuhk.edu.hk)</Content>
            
				<EmailField type="email"  placeholder="Email Id" pattern=".+@link.cuhk.edu.hk"  required />
            </Form>
            <BtnWrapper>
                <NextBtn to='./signup_signin' >back</NextBtn>
                {/* <Submit_btn type="submit" >
                    <Link_text to='./next' >
                        next
                    </Link_text>
                </Submit_btn> */}

                <NextBtn to='./next' >next</NextBtn>

            
            </BtnWrapper>
            
        </form>
    )
}

export default ForgetPasswordForm
