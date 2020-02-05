import React, {useState} from 'react'
import {Modal, ModalHeader, ModalBody, Button} from 'reactstrap'
import APIURL from '../helpers/environment';
import styled from 'styled-components';

const Font = styled.div`
    font-family: "Fugaz One", "cursive";
    
`


const ProfileDelete = (props) => {
    // const [modal, setModal]= useState(false);
    const [goaway, setGoaway]= useState(true)

    // const toggle = () => setModal(!modal);
    const byemodal = () => setGoaway(!goaway);


     const ProfileTerminate = (e) => {
         e.preventDefault()
        fetch(`${APIURL}/profile/myprofile`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then(
            console.log("delete works"),
            byemodal(),
            props.toggle(),
            props.fetchUserProfile(),
        )
        
        
    }
    
    return(
        <div>
            <Font>
            <Modal isOpen={goaway}>
                <ModalHeader>
                    ARE YOU SURE?
                    <p>(All information and tips will be deleted and CANNOT be recovered.)</p>
                </ModalHeader>
                <ModalBody>
                <Button color='warning' onClick={ProfileTerminate}>DELETE</Button>
                <Button color='info' onClick={byemodal, props.deletemodal}> OR DON'T</Button>
                </ModalBody>
            </Modal>
            </Font>
        </div>
    )
}

export default ProfileDelete;