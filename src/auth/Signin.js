import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import APIURL from '../helpers/environment'

const SignIn = (props) => {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${APIURL}/user/signin`, {
            method: 'POST',
            body: JSON.stringify({email:email, password: password}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then ((res)=> res.json())
        .then((data)=> {
            props.updateToken(data.sessionToken)
        })
    }

    return(
        <div>
            <h1>Sign In</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="email">Email:</Label>
                    <Input onChange={(e)=> setEmail(e.target.value)} name="email" value={email} placeholder="Welcome back Queen!" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password:</Label>
                    <Input onChange={(e)=> setPassword(e.target.value)}  name="password" value={password} placeholder="SHHHHHH" />
                </FormGroup>
                <Button color="info" type="submit">Sign In</Button>
            </Form>
        </div>
    )
}

export default SignIn;