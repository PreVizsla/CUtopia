import React from 'react'
import {  Form, Content, Heading} from './VerificationSendElement';

function VerificationSendForm() {
    return (
        <form>
            <Form>
            <Heading>Confirmation Email Sent</Heading>
            <Content>We have sent you a confirmation link to your Email
            Click the link to proof that you are the owner of the Email</Content>

            </Form>
        </form>
    )
}

export default VerificationSendForm
