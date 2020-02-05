import React, {useState} from 'react';
import {Navbar, NavbarToggler,NavItem, Button, Collapse, Nav,} from 'reactstrap';
import styled from 'styled-components';
import Ball from '../assets/discoball.png';


const Font = styled.div`
    font-family: "Fugaz One", "cursive";
    
`
const Dragbar = styled.h1`
    color: white;
    color: #fff;
        text-shadow: 2px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
`



const Sitebar = (props) => {

    const [isOpen, setIsOpen]=useState(false);

    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }



    return(
        <Navbar color="info" light expand="md">
            <img src={Ball} width="75px" height="75px" alt=""/>
            <Font><Dragbar><h1>DragBar</h1></Dragbar>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button color="warning" onClick={props.clickLogout} style={{align: "right"}}>Logout</Button>
                    </NavItem>
                </Nav>
                </Collapse>
                </Font>
        </Navbar>
    )
}

export default Sitebar;