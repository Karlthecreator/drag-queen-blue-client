import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import APIURL from '../helpers/environment';
import styled from 'styled-components';

const Font = styled.div`
    font-family: "Fugaz One", "cursive";
    
`

const ProfileCreate = (props) => {
    const [queenName, setQueenName]= useState('');
    const [birthName, setBirthName]=useState('');
    const [homeTown, setHomeTown]=useState('');
    const [currentTown, setCurrentTown]=useState('');
    const [about, setAbout]=useState('');
    const [accolades, setAccolades]=useState('');
    const [upcomingShows, setUpcomingShows]=useState('');
    const [modal, setModal]= useState(false);
    const [image, setImage]= useState('');

    const toggle = () => setModal(!modal);

    const handleSubmit =(e)=> {
        e.preventDefault();
        fetch(`${APIURL}/profile/create`, {
            method: 'POST',
            body: JSON.stringify({queenName:queenName, birthName:birthName, homeTown:homeTown, currentTown:currentTown, about:about, accolades:accolades, upcomingShows:upcomingShows, image:image}),
            headers: new Headers({
                'Content-Type':'application/json',
                'Authorization': props.token
            })
         }).then((res)=> res.json())
         .then((logData) => {
             console.log(logData);
             setQueenName('');
             setBirthName('');
             setHomeTown('');
             setCurrentTown('');
             setAbout('');
             setAccolades('');
             setUpcomingShows('');
             setImage('');
             props.fetchUserProfile();
         })
    }


    return(
        <>
        <Font>
        <Button onClick={toggle}>Create</Button>
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>Create Profile</ModalHeader>
        <ModalBody>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="queenname">Chosen Name</Label>
                <Input name="queenname" value={queenName} onChange={(e)=> setQueenName(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="birthname">Birth Name</Label>
                <Input name="birthname" value={birthName} onChange={(e)=> setBirthName(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="hometown">Hometown</Label>
                <Input name="hometown" value={homeTown} onChange={(e)=> setHomeTown(e.target.value)}/>
            </FormGroup>
                <Label htmlFor="currenttown">Current Town</Label>
                <Input name="currenttown" value={currentTown} onChange={(e)=> setCurrentTown(e.target.value)}/>
            <FormGroup>
                <Label htmlFor="about">About</Label>
                <Input name="about" value={about} onChange={(e)=> setAbout(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="accolades">Accolades</Label>
                <Input name="accolades" value={accolades} onChange={(e)=> setAccolades(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="upcomingshows">Upcoming Shows</Label>
                <Input name="upcomingshows" value={upcomingShows} onChange={(e)=> setUpcomingShows(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="image">Image URL</Label>
                <Input name="image" value={image} onChange={(e)=> setImage(e.target.value)}/>
            </FormGroup>
            <ModalFooter>
            <Button color="info" type="submit">Create Profile</Button>
            <Button color="info" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Form>
        </ModalBody>
        </Modal>
        </Font>
        </>
    )
}

export default ProfileCreate;