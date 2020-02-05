import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import APIURL from '../helpers/environment'
import styled from 'styled-components';

const Font = styled.div`
    font-family: "Fugaz One", "cursive";
    
`

const SignUp = (props) => {
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    // const [modal, setModal]= useState(false);

    // const toggle = () => setModal(!modal)

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${APIURL}/user/signup`, {
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
            <Font>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="email"></Label>
                    <Input onChange={(e)=> setEmail(e.target.value)} type="email" name="email" value={email} placeholder="EMAIL"/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password"></Label>
                    <Input onChange={(e)=> setPassword(e.target.value)} minLength="5" name="password" value={password} placeholder="PASSWORD"/>
                </FormGroup>
                <Button color="info" type="submit">Sign Up</Button>
            </Form>
            </Font>
        </div>
    )
}

export default SignUp;