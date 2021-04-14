import React from 'react'
import {  Form, Content, Heading } from '../VerificationSend/VerificationSendElement';

function EmailConfirmedForm() {
    return (
        <form>
            <Form>
            <Heading>Congratulations!!</Heading>
            <Content>Your email has been confirmed</Content>
            </Form>
        </form>
    )
}

export default EmailConfirmedForm
