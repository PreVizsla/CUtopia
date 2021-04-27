import React from 'react'
import {  Form, Content, Heading } from './VerificationSendElement';

function VerificationSendForm() {
    return (
        //this is just the inside of the purple container
        <form>
            <Form>
            <Heading>Check your Email!</Heading>
            <Content>We have sent you a link to your Email
            Click the link to proof that you are the owner of the Email</Content>
            </Form>
        </form>
    )
}

export default VerificationSendForm
