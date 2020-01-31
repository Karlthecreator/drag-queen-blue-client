import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const SignUp = (props) => {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    // const [modal, setModal]= useState(false);

    // const toggle = () => setModal(!modal)

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/user/signup", {
            method: 'POST',
            body: JSON.stringify({user: {email: email, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then ((res) => res.json()).then ((data) => {
            props.updateToken(data.sessionToken)
        })
    }

    return(
        <div>
            <h1>Create Account</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="email">Email:</Label>
                    <Input onChange={(e)=> setEmail(e.target.value)} name="email" value={email} placeholder="Email address here"/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password:</Label>
                    <Input onChange={(e)=> setPassword(e.target.value)} minlength="5" name="password" value={password} placeholder="SSSHHHHHHHHH!"/>
                </FormGroup>
                <Button color="info" type="submit">Sign Up</Button>
            </Form>
        </div>
    )
}

export default SignUp;