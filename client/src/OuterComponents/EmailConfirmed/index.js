import React from 'react'
import {  Form, Content, Heading } from '../VerificationSend/VerificationSendElement';

function EmailConfirmedForm() {
    return (
        //this is just for the form where the email is verified
        <form>
            <Form>
            <Heading>Congratulations!!</Heading>
            <Content>Your email has been confirmed</Content>
            </Form>
        </form>
    )
}

export default EmailConfirmedForm
