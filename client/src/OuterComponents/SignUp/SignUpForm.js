import React from 'react'
import {  InputField, CheckBox,White, SubmitBtn, EmailField} from './SignupElements';

function SignUpForm() {
    return (
        <div>
		    <form id="register" className="user-input">
				<InputField type="text" placeholder="Your Name" required/>
				<EmailField type="email" placeholder="Email Id" pattern=".+@link.cuhk.edu.hk" required/>
				<InputField type="text" placeholder="Password" required/>
				<InputField type="text" placeholder="Confirm Password" required/>
				<CheckBox type="checkbox" /><White>I agree to the terms & conditions</White>
				<SubmitBtn type="submit">Sign Up</SubmitBtn>
			</form>
        </div>
    )
}

export default SignUpForm
