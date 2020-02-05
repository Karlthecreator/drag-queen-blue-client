import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import APIURL from '../helpers/environment';
import styled from 'styled-components';

const Font = styled.div`
    font-family: "Fugaz One", "cursive";
    
`

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
            <Font>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="email"></Label>
                    <Input onChange={(e)=> setEmail(e.target.value)} name="email" value={email} placeholder="EMAIL" />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password"></Label>
                    <Input onChange={(e)=> setPassword(e.target.value)}  name="password" value={password} placeholder="PASSWORD" />
                </FormGroup>
                <Button color="info" type="submit">Sign In</Button>
            </Form>
            </Font>
        </div>
    )
}

export default SignIn;