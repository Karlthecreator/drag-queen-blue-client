import React, {useState} from 'react'
import {Modal, ModalHeader, ModalBody, Button} from 'reactstrap'
import APIURL from '../helpers/environment'


const ProfileDelete = (props) => {
    const [modal, setModal]= useState(false);

    const toggle = () => setModal(!modal);


     const ProfileTerminate = (e) => {
         e.preventDefault()
        fetch(`${APIURL}/profile/myprofile`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then(console.log('it works'))
        
    }
    
    return(
        <div>
            <Modal isOpen={true}>
                <ModalHeader>
                    <h1>ARE YOU SURE?</h1>
                    <p>(All information and tips will be deleted and CANNOT be recovered.)</p>
                </ModalHeader>
                <ModalBody>
                <Button color='warning' onSubmit={ProfileTerminate} >DELETE</Button>
                <Button color='info' onClick={toggle}> OR DON'T</Button>
                </ModalBody>
            </Modal>
            
        </div>
    )
}

export default ProfileDelete;