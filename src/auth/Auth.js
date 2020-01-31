import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Signin from './Signin';
import Signup from './Signup';




const Auth = (props) => {
    
    // const title = () => {
    //     return Signin ? 'Signin' : 'Signup'
    // }

   
    





    return(
        <div>
            
        <Container className="auth-container">
            <Row>
                <Col md="6">
                    <Signup updateToken={props.updateToken} />
                </Col>
                <Col md="6" className="login-col">
                    <Signin updateToken={props.updateToken}/>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Auth;